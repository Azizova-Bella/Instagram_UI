import React from 'react';
import './settings.css';
import avatar from "../../shared/assets/good.webp";
const SettingsPage = () => {
  return (
    <div className="settings-container">
      <h2 className="settings-title">Edit profile</h2>

      <div className="profile-header">
        <img
          src={avatar}
          alt="Profile"
          className="profile-img"
        />
        <div className="profile-info">
          <span className="profile-username">belive_me_12_05_</span>
          <button className="change-photo-btn">Change photo</button>
        </div>
      </div>

      <div className="settings-field">
        <label>Website</label>
        <input type="text" placeholder="Website" />
        <p className="note-text">
          Editing your links is only available on mobile. Visit the Instagram app and edit your profile to change the websites in your bio.
        </p>
      </div>

      <div className="settings-field">
        <label>Bio</label>
        <div className="bio-wrapper">
          <input type="text" placeholder="Bio" defaultValue="justbelieve" />
          <span className="bio-length">11 / 150</span>
        </div>
      </div>

      <div className="settings-field">
        <label>Gender</label>
        <select>
          <option>Prefer not to say</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <p className="note-text">This won’t be part of your public profile.</p>
      </div>
    </div>
  );
};

export default SettingsPage;
