import React from 'react';
import "./profile.css";
import avatar from "../../shared/assets/good.webp";
import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import SettingsIcon from '@mui/icons-material/Settings';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const ProfilePage = () => {
  return (
    <div className="profile">
      <div className="profile__header">
        <div className="profile__avatar-section">
          <div className="profile__avatar">
            <img src={avatar} alt="Profile Avatar" className="profile__avatar-img" />
          </div>
          <div className="profile__add-story">
            <AddCircleOutlineIcon fontSize="small" />
          </div>
          <div className="profile__add-text">New</div>
        </div>
        <div className="profile__info">
          <div className="profile__top">
            <h2 className="profile__username">belive_me_12_05_</h2>
            <button className="profile__btn">
              <EditIcon fontSize="small" /> Edit profile
            </button>
            <button className="profile__btn">
              <ArchiveIcon fontSize="small" /> View archive
            </button>
            <div className="profile__settings-icon">
              <SettingsIcon fontSize="small" />
            </div>
          </div>
          <div className="profile__stats">
            <span><strong>0</strong> posts</span>
            <span><strong>13</strong> followers</span>
            <span><strong>71</strong> following</span>
          </div>
          <div className="profile__bio">
            <p>.</p>
            <p>justbelieve</p>
          </div>
        </div>
      </div>

      <div className="profile__tabs">
        <span className="active">
          <CameraAltIcon fontSize="small" /> POSTS
        </span>
        <span>
          <BookmarkBorderIcon fontSize="small" /> SAVED
        </span>
        <span>
          <PersonOutlineIcon fontSize="small" /> TAGGED
        </span>
      </div>

      <div className="profile__share">
        <div className="profile__share-icon">
          <CameraAltIcon fontSize="large" />
        </div>
        <h3>Share Photos</h3>
      </div>
    </div>
  );
};

export default ProfilePage;