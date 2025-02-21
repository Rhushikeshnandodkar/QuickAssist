import os
import faiss
import json
import pickle
from typing import Dict
from fastapi import FastAPI, HTTPException, Request
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS
from langchain_groq import ChatGroq
from langchain.schema import HumanMessage, AIMessage
from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationalRetrievalChain
from langchain.prompts import PromptTemplate

app = FastAPI()
os.environ['GROQ_API_KEY'] = "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"

# Set up embeddings
embedding_model = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")

# set up LLM
llm = ChatGroq(model_name="llama3-70b-8192", api_key="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")

FAISS_DIR = "indexes"
# os.mkdir(FAISS_DIR)

chat_memories : Dict[str, ConversationBufferMemory] = {}

instruction_prompt = PromptTemplate(
    input_variables=["question", "context"],
    template="""
    You are a helpful assistant trained on product manuals.
    Based on the manual, answer the user's question in step-by-step format.

    User's Question: {question}

    {context}

    Provide a step-by-step guide in numbered format.
    """
)

def get_faiss_path(name:str, unique_id:str):
    return os.path.join(FAISS_DIR, f"{name}_{unique_id}.faiss")

def get_metadata_path(name: str, unique_id: str):
    return os.path.join(FAISS_DIR, f"{name}_{unique_id}.pkl")

@app.post("/store/")
async def store_text(request: Request):
    data = await request.json()

    name = data.get("name")
    unique_id = data.get("unique_id")
    text = data.get("text")

    text_splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
    documents = text_splitter.create_documents([text])

    vector_store = FAISS.from_documents(documents, embedding_model)

    faiss_path = get_faiss_path(name, unique_id)
    vector_store.save_local(faiss_path)

    metadata_path = get_metadata_path(name, unique_id)
    with open(metadata_path, "wb") as f:
        pickle.dump({"name": name, "unique_id": unique_id}, f)

    return {"message": "Text stored successfully", "faiss_path": faiss_path}


@app.post("/ask/")
async def ask_question(request: Request):
    """
    Retrieve FAISS index based on name and unique_id and answer questions.
    """
    data = await request.json()
    
    name = data.get("name")
    unique_id = data.get("unique_id")
    question = data.get("question")

    if not name or not unique_id or not question:
        raise HTTPException(status_code=400, detail="Missing name, unique_id, or question.")

    # Load FAISS index
    faiss_path = get_faiss_path(name, unique_id)
    if not os.path.exists(faiss_path):
        raise HTTPException(status_code=404, detail="FAISS index not found.")

    vector_store = FAISS.load_local(faiss_path, embedding_model, allow_dangerous_deserialization=True)

    # Create retriever
    retriever = vector_store.as_retriever()

    # Manage conversation memory
    memory_key = f"{name}_{unique_id}"
    if memory_key not in chat_memories:
        chat_memories[memory_key] = ConversationBufferMemory(memory_key="chat_history", return_messages=True)

    # Create conversation chain
    qa_chain = ConversationalRetrievalChain.from_llm(llm=llm, retriever=retriever, memory=chat_memories[memory_key])

    relevant_docs = retriever.get_relevant_documents(question)
    context = "\n".join([doc.page_content for doc in relevant_docs])

    # Format prompt with retrieved context
    formatted_prompt = instruction_prompt.format(question=question, context=context)

    # Get response from the LLM
    response = llm.invoke(formatted_prompt)

    return {"answer": response}


