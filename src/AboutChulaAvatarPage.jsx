import React from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedBackground from './AnimatedBackground'; 


function AboutChulaAvatarPage() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleCreate3DClick = () => {
    navigate('/camera-code');
  };

  const handleMangosClick = () => {
    window.open("https://www.mangosgo.com/", '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <AnimatedBackground /> 
      <div className="aboutchulaavatar-page">
        <div className="about-navbar-container">
          <a className="navbar-chulaavatar-logo" onClick={handleHomeClick}>
            ChulaAvatar
          </a>
          <ul className="navbar-menu">
            <li className="navbar-item" onClick={handleCreate3DClick}>Create 3D Avatar</li>
            <li className="navbar-item" onClick={handleMangosClick}>MANGOS</li>
            <li className="navbar-item">Contact Us</li>
          </ul>
        </div>

        <div className="aboutchulaavatar-container">
          <h1 className="aboutchulaavatar-h1">ChulaAvatar</h1>
          <br />
          <p className="aboutchulaavatar-p">
            ChulaAvatar, is one of the innovative technologies which is brought by the Chula Engineering, can generate lifelike avatar of the person with its upmost resolution. 
            The initiative of the ChulaAvatar is from the work of 3D Face Reconstruction for the Metaverse which is known as Mongos. 
            The brief of the work is the deep learning model takes the input as 2D image of a person and output as its reconstructed 3D face including texture. Therefore, we call the model as the single pipeline model.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutChulaAvatarPage;
