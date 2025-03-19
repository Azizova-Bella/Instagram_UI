import React from 'react';
import './create.css';
import ImageIcon from '@mui/icons-material/Image';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const CreatePostModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>✖</button>
        <h3 className="modal-title">Create new post</h3>
        <div className="modal-body">
          <div className="modal-icon-group">
            <ImageIcon style={{ fontSize: 60 }} />
            <PlayCircleOutlineIcon style={{ fontSize: 60, marginLeft: -20 }} />
          </div>
          <p className="modal-text">Drag photos and videos here</p>
          <button className="select-button">Select from computer</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;
