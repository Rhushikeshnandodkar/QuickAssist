import React, { useState } from 'react';
import { ChatbotStyle } from './Products.style';
import { useParams } from 'react-router-dom';
import GlobalStyle from '../../molecules/gloable.style';
import { useEffect } from 'react';
import { useRef } from 'react';
import { QueryStatus } from '@reduxjs/toolkit/query';

function Chatbot() {
    const { companyId, productId, uniqueId } = useParams();
    const [messages, setMessages] = useState([]);
    const [reply, setReply] = useState(false);
    const [inputMessage, setInputMessage] = useState('');
    const [botData, setBotData] = useState(null)
    const [connectUs, SetConnectUs] = useState(false)
    const [company, setCompany] = useState([])
    const [videos, setVideos] = useState([])
    const [thinking, setThinking] = useState(false)
    const [queriesError, setQueriesError] = useState(false)
    const formatMessageContent = (content) => {
        return content
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")  // Makes text between ** bold **
            .replace(/\\n/g, "\n")  // Converts escaped `\n` into actual new lines
            .split("\n")  // Splits text into an array
            .map((line, index) => 
                line.trim() ? <p key={index} dangerouslySetInnerHTML={{ __html: line.trim() }}></p> : <br key={index} /> 
            );
    };
    const chatMessagesRef = useRef(null);
    const connectUsRef = useRef(null)
    // Fetch previous messages on mount
    useEffect(() => {
        const fetchPreviousMessages = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/chatbot/current-bot', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ uniqueId })
                });

                const data = await response.json();
                // console.log("messages are ---------------->", data.data.messages)
                if(data.data.messages){
                    const formattedMessages = data.data.messages.map(msg => ({
                        ...msg,
                        content: formatMessageContent(msg.content) ,
                        videos: msg.videos || []  // Apply formatting
                    }));
                    setMessages(formattedMessages);
                }
                if(data.data.botdata){
                    // console.log(botData)
                    setBotData(data.data.botdata)
                }
                
            } catch (error) {
                console.error('Error fetching previous messages:', error);
            }
        };

        fetchPreviousMessages();
    }, [uniqueId]);

    useEffect(() => {
        fetchCompanyInfo()
        if (chatMessagesRef.current) {
            chatMessagesRef.current.scrollTo({
                top: chatMessagesRef.current.scrollHeight,
                behavior: "smooth"
            });
        }
        if(connectUsRef.current){
            chatMessagesRef.current.scrollTo({
                top: chatMessagesRef.current.scrollHeight,
                behavior: "smooth"
            });
        }  
    }, [messages, connectUs]);

    useEffect(() => {
        if (botData) {
            // console.log("Updated botData:", botData);
        }
    }, [botData]);

    const fetchCompanyInfo = async() =>{
        const res = await fetch(`http://localhost:5000/api/company/company-info`, {
            method : "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ companyId })
        })
        const company_data = await res.json();
        // console.log(company_data)
        setCompany(company_data.data)
        // console.log(company)
    }

    const handleSendMessage = async () => {
        SetConnectUs(false)
        setThinking(true)
        if (!inputMessage.trim()) return;

        // Add user message to chat
        const newMessage = {
            sender: 'user',
            content: inputMessage,
            timestamp: new Date().toLocaleTimeString()
        };
        setMessages([...messages, newMessage]);
        setReply(true);

        // Prepare request payload
        const requestData = {
            uniqueId,
            companyId,
            productId,
            question: inputMessage
        };

        try {
            const response = await fetch('http://localhost:5000/api/chatbot/ask-bot', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestData)
            });
            if(response.status == 402){
                console.log('query error occured')
                setThinking(false)
                setQueriesError(true)
            }
            const data = await response.json();

            console.log(response)
            
            const fanswer = data.data.answer.content
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                .replace(/\\n/g, "\n")
                .split("\n")
                .map((line, index) => 
                    line.trim() ? <p key={index} dangerouslySetInnerHTML={{ __html: line.trim() }}></p> : <br key={index} /> 
                );  

            // const videos = data.data.videos 
            // Add bot's response to chat
            setMessages([...messages, newMessage, {
                sender: 'bot',
                content: fanswer,
                timestamp: new Date().toLocaleTimeString(),
                videos: data.data.videos || []
            }]);
            setThinking(false)
            setReply(false);

        } catch (error) {
            console.error('Error fetching chatbot response:', error);
        }

        setInputMessage(''); // Clear input field
    };



    const handleConnectUs = async (msg, index) =>{
        if (index > 0) {
            console.log(msg)
            console.log(messages``)
            const userMessage = messages[index - 1]; // Get the previous message
            console.log("User message is: ", userMessage);
            console.log(index)
            const req_data = {
                uniqueId : uniqueId,
                message_id : userMessage._id,
                product : productId,
                company : companyId,
                result : false,
                content : userMessage.content
            }
            console.log(req_data)
            try{
                const response = await fetch("http://localhost:5000/api/chatbot/message-feedback", {
                    method : 'POST',
                    headers : { "Content-Type" : "application/json"},
                    body : JSON.stringify(req_data)
                })
                const data = await response.json()
                SetConnectUs(true)
            }catch (error) {
                console.error('Error fetching chatbot response:', error);
            }
            if(connectUsRef.current){
                chatMessagesRef.current.scrollTo({
                    top: chatMessagesRef.current.scrollHeight,
                    behavior: "smooth"
                });
            }

        }
    }

    return (
        <>
            <GlobalStyle />
            <ChatbotStyle>
                <div className="chat-container">
                    <div className="chat-header">
                        <div className="chat-title">
                        {botData ? botData.product.product_name : "Loading"} <span className="chat-title-addon"></span>
                        </div>
                        <div className="chat-actions">
                            {/* <button className="chat-action-btn"><span className="material-symbols-rounded">refresh</span></button>
                            <button className="chat-action-btn"><span className="material-symbols-rounded">delete</span></button> */}
                            Total queries used : {botData ? botData.queriesUsed : "loading"}/10
                        </div>
                    </div>
                    <div className="chat-messages" ref={chatMessagesRef}>
                    <div className="message bot">
                    <div className="message-avatar">
                        <span className="material-symbols-rounded">smart_toy</span>
                    </div>
                    <div>
                      
                        
                        <div className="message-content">
                        Hello! I'm your assistant for your {botData ? botData.product.product_name : "Loading"} . How can I help you today?
                        </div>
                        <div className="message-meta">10:15 AM</div>
                    </div>
                    </div>
                                {messages.map((msg, index) => (
                                    <div key={index} className={`message ${msg.sender}`}>
                                        <div className="message-avatar">
                                            {msg.sender === 'bot' ? <span className="material-symbols-rounded">smart_toy</span> : 'JD'}
                                        </div>
                                        <div>
                                            <div className="message-content">{msg.content}    {msg.sender === 'bot' && msg.videos && msg.videos.length > 0 && (
                            <div className="video-links">
                            {msg.videos.map((video, vIndex) => {
                              const videoId = new URLSearchParams(new URL(video.video_link).search).get("v");
                              const embedUrl = `https://www.youtube.com/embed/${videoId}`;
                          
                              return (
                                <div className='youtube-sug' key={vIndex} style={{ marginBottom: '1rem' }}>
                                  <iframe
                                    width="300"
                                    height="200"
                                    src={embedUrl}
                                    title={`YouTube Video ${vIndex}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                  ></iframe>
                                </div>
                              );
                            })}
                          </div>
                        )}</div>
                                    <div className="message-meta">{new Date(msg.timestamp).toLocaleTimeString('en-US', {
  hour: '2-digit',
  minute: '2-digit',
//   second: '0-digit',
  hour12: true  // change to true for AM/PM
})}</div>
                                    {msg.sender === 'bot' ?   <div className="feedback-buttons">
                                    </div>: ""} 
                                </div>
                            </div>
                        ))}
                          {thinking ? <div className="thinking-widgite">Thinking...</div>: ""}
                          {queriesError ?  <>{company && Object.keys(company).length > 0 ? (
                                <>
                               <div className="contact-info" ref={connectUsRef}>
                        <div className="visible">
                        <span className="material-symbols-outlined">support_agent</span>
                        <strong>Connect with us</strong> <br />
                        <ul>
                            {company && Object.keys(company).length > 0 ? (
                                <>
                                <b>We are currently out of quries please contact our team for support</b>
                                    <li><b>Company Email</b> : {company.company_email}</li>
                                    <li><b>Company Contact</b> : {company.company_contact}</li>
                                </>
                            ) : (
                                "Loading..."
                            )}
                        </ul>
                        </div>
                        </div>
                                </>
                            ) : (
                                "Loading..."
                            )} </>: ""}


                     
                    </div>
                
                    <div className="chat-input-container">
                        <div className="chat-input-wrapper">
                            <input
                                type="text"
                                className="chat-input"
                                placeholder="Type your message..."
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()} // Send message on Enter key
                            />
                            <div className="input-actions">
                                <button className="input-action-btn"><span className="material-symbols-rounded">attach_file</span></button>
                                <button className="input-action-btn"><span className="material-symbols-rounded">mic</span></button>
                                <button className="input-action-btn send-btn" onClick={handleSendMessage}>
                                    <span className="material-symbols-rounded">send</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </ChatbotStyle>
        </>

    );
}

export default Chatbot;
