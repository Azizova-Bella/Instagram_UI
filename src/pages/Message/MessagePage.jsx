import React, { useState } from 'react'
import './message.css'
import ChatList from './ChatList'
import ChatBox from './ChatBox'
import MailOutlineIcon from '@mui/icons-material/MailOutline'

const MessagePage = () => {
  const [selectedChat, setSelectedChat] = useState(null)

  const isMobile = window.innerWidth <= 768

  return (
    <div className="message-page">
      <div className={isMobile && selectedChat ? 'hide-chat-list' : 'chat-list'}>
        <ChatList onSelectChat={setSelectedChat} />
      </div>

      {selectedChat ? (
        <div className={`chat-box-wrapper ${isMobile && !selectedChat ? 'hide-on-mobile' : ''}`}>
          <ChatBox chat={selectedChat} />
        </div>
      ) : (
        <div className={`chat-placeholder ${isMobile ? 'hide-on-mobile' : ''}`}>
          <MailOutlineIcon className="chat-icon" />
          <h2>Your messages</h2>
          <p>Send a message to start a chat.</p>
          <button className="send-message-btn">Send message</button>
        </div>
      )}
    </div>
  )
}

export default MessagePage
