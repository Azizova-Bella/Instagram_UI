import React from "react";

const ChatBox = ({ chat }) => {
  return (
    <div className="chat-box">
      <div className="chat-header">
        <strong>{chat.name}</strong>
      </div>
      <div className="chat-messages">
        <p>Write a nessage to <strong>{chat.name}</strong>.</p>
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Write something ..." />
        <button>Отправить</button>
      </div>
    </div>
  );
};

export default ChatBox;
