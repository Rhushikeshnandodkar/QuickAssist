import React, { useState } from 'react';
import { ChatbotStyle } from './Products.style';
import { useParams } from 'react-router-dom';
import GlobalStyle from '../../molecules/gloable.style';
import { useEffect } from 'react';

function Chatbot() {
    const { companyId, productId, uniqueId } = useParams();
    const [messages, setMessages] = useState([]);
    const [reply, setReply] = useState(false);
    const [inputMessage, setInputMessage] = useState('');
    const [botData, setBotData] = useState(null)

    const formatMessageContent = (content) => {
        return content
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")  // Makes text between ** bold **
            .replace(/\\n/g, "\n")  // Converts escaped `\n` into actual new lines
            .split("\n")  // Splits text into an array
            .map((line, index) => 
                line.trim() ? <p key={index} dangerouslySetInnerHTML={{ __html: line.trim() }}></p> : <br key={index} /> 
            );
    };

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
                if(data.data.messages){
                    const formattedMessages = data.data.messages.map(msg => ({
                        ...msg,
                        content: formatMessageContent(msg.content)  // Apply formatting
                    }));
                    setMessages(formattedMessages);
                }
                if(data.data.botdata){
                    console.log(botData)
                    setBotData(data.data.botdata)
                }

                
            } catch (error) {
                console.error('Error fetching previous messages:', error);
            }
        };

        fetchPreviousMessages();
    }, [uniqueId]);

    useEffect(() => {
        if (botData) {
            console.log("Updated botData:", botData);
        }
    }, [botData]);

    const handleSendMessage = async () => {
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

            const data = await response.json();
            
            const fanswer = data.data.answer.content
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                .replace(/\\n/g, "\n")
                .split("\n")
                .map((line, index) => 
                    line.trim() ? <p key={index} dangerouslySetInnerHTML={{ __html: line.trim() }}></p> : <br key={index} /> 
                );  

            // Add bot's response to chat
            setMessages([...messages, newMessage, {
                sender: 'bot',
                content: fanswer,
                timestamp: new Date().toLocaleTimeString()
            }]);
            setReply(false);

        } catch (error) {
            console.error('Error fetching chatbot response:', error);
        }

        setInputMessage(''); // Clear input field
    };

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
                    <div className="chat-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.sender}`}>
                                <div className="message-avatar">
                                    {msg.sender === 'bot' ? <span className="material-symbols-rounded">smart_toy</span> : 'JD'}
                                </div>
                                <div>
                                    <div className="message-content">{msg.content}</div>
                                    <div className="message-meta">{msg.timestamp}</div>
                                </div>
                            </div>
                        ))}
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
