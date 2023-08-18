import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import "./chat.css";


const socket = io('http://localhost:5000/');
const chatUrl = 'http://localhost:5000/api/chats';

function Chat() {
  const [message, setMessage] = useState('');
  const [receivedMessage, setReceivedMessages] = useState([]);

  // CREATE MESSAGE
  const sendMessage = e => {
    e.preventDefault();
    socket.emit('message', message); 
    setMessage('');
  };

  // DELETE MESSAGE
  const handleDeleteMessage = async (chatId) => {
    try {
      // Delete the message from the backend
      await fetch(`${chatUrl}/${chatId}`, {
        method: 'DELETE'
      });

      // Update the received messages by filtering out the deleted message
      setReceivedMessages(prevMessages => prevMessages.filter(message => message._id !== chatId));
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  // FETCH MESSAGE
  useEffect(() => {
    // Fetch previous chat messages from the server API
    fetch(chatUrl)
    .then(response => response.json())
    .then(messages => {
      setReceivedMessages(messages);
      console.log(messages); // Add this line to log the received messages
    })
    .catch(error => console.error('Fetch error:', error));

    // Listen for new messages from the server
    socket.on('message_receiver', newMessage => {
      setReceivedMessages(prevMessages => [...prevMessages, newMessage]);
    });
  }, []);

  return (
    <div className="Chat">
      <h1>Today's message</h1>
      <form onSubmit={sendMessage}>
        <input type="text" 
        name="message" 
        placeholder="Type Message..." 
        value={message}
        onChange={e => setMessage(e.target.value)}
        ></input>
        <button type="submit">
          Send
        </button>
      </form>
      {receivedMessage.map((payload, index) => (
        <div key={payload._id} className="received-message">
        <h2>{payload.text}</h2>
        <button className="delete-button" onClick={() => handleDeleteMessage(payload._id)}>Delete</button>
      </div>
      ))}
    </div>
  );
  
}

export default Chat;

