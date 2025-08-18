import React from 'react';
import { useNavigate } from 'react-router-dom';

function QRCodePage() {
  const navigate = useNavigate();

  const qrData = () => {
    navigate('/mobile-webpage', '_blank', 'noopener,noreferrer');
  };

  const qrSize = "200x200";
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrData)}&size=${qrSize}`;

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleBackClick = () => {
    navigate('/camera-code', '_blank', 'noopener,noreferrer'); 
  };
  const handleAboutChulaClick = () => {
       navigate('/about-chula');
       //window.location.href = '/';
        //window.open(window.location.origin + '/', '_blank', 'noopener,noreferrer');
    }

  return (
    <>
      <div className="welcome-page">
        <div className="navbar-container">
          <a className="navbar-chulaavatar-logo" onClick={handleHomeClick}>
            ChulaAvatar
          </a>
          <ul className="navbar-menu">
            <li className="navbar-item" onClick={handleAboutChulaClick}>About ChulaAvatar</li>
            <li className="navbar-item">MANGOS</li>
            <li className="navbar-item">Contact Us</li>
          </ul>
        </div>

        <div className="back-button-container">
            <button className="qr-back-button" onClick={handleBackClick}>
            ← Back
            </button>
        </div>
        

        <div className="qr-code-container">
          <h1 className="qr-code-h1">
            Scan the QR Code with your smart phone to access the camera.
          </h1>
          <img src={qrUrl} alt="QR Code" />
        </div>
      </div>
    </>
  );
}

export default QRCodePage;
