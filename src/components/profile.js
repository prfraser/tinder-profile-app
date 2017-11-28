import React from 'react';

const Profile = ({ firstName, lastName, imgUrl, likes }) => (
  <div className="profile">
    <div>
      <img src={imgUrl} alt="User"/>
    </div>
    <p>Name: {firstName} {lastName}</p>
    <p>Likes: {likes}</p>
  </div>
);

export default Profile;