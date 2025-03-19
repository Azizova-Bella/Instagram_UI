import React, { useState } from 'react';
import './create.css';
import CreatePostModal from './post';

const CreatePage = () => {
  const [openModal, setOpenModal] = useState(true);

  return (
    <div className='create'>
      <button className='close_btn' onClick={() => setOpenModal(true)}>Create a new </button>
      <CreatePostModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default CreatePage;
