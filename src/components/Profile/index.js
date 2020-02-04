import React from 'react';

import './styles.css';
import avatar from '../../assets/images/avatar.jpg';

const Profile = () => {

  return (
    <header className="profile-info">
      <img src={avatar} alt="Paulo Henrique" />
      <h2>Paulo Henrique Rodrigues Grund</h2>
      <span>Computer Science Student</span>
    </header>
  )
}

export default Profile;