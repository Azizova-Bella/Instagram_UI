import React from 'react';
import './chatList.css';
import avatar1 from '../../shared/assets/bug.gif';
import avatar2 from '../../shared/assets/soft_club.png';
import avatar3 from '../../shared/assets/cats.gif';
import avatar4 from '../../shared/assets/giphy.gif';

const chatData = [
  { id: 1, name: 'sakina_collection_pm', lastMessage: 'Reacted 😂 to your message', avatar: avatar1 },
  { id: 2, name: 'softclub.tj', lastMessage: 'Хуб :)', avatar: avatar2 },
  { id: 3, name: 'Мактaби барномасозӣ', lastMessage: 'Да, вчера состоялся первый...', avatar: avatar3 },
  { id: 4, name: 'АВТОШКОЛА | ДУШАНБЕ', lastMessage: 'Салом алейкум...', avatar: avatar4 },
];

const ChatList = ({ onSelectChat }) => {
  return (
    <div className="chat-list">
      {chatData.map((chat) => (
        <div key={chat.id} className="chat-item" onClick={() => onSelectChat(chat)}>
          <img src={chat.avatar} alt={chat.name} className="chat-avatar" />
          <div className="chat-info">
            <div className="chat-name">{chat.name}</div>
            <div className="chat-message">{chat.lastMessage}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;