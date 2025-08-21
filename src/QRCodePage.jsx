import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function QRCodePage() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get the captured photos from navigation state
  const capturedPhotos = location.state?.capturedPhotos || [];
  
  // Debug log to check if photos are received
  console.log('Received photos:', capturedPhotos.length);

  const qrData = window.location.origin + '/mobile-webpage';
  const qrSize = "200x200";
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrData)}&size=${qrSize}`;

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleBackClick = () => {
    navigate('/camera-code');
  };

  const handleAboutChulaClick = () => {
    navigate('/about-chula');
  };

  const handleMangosClick = () => {
    window.open("https://www.mangosgo.com/", '_blank', 'noopener,noreferrer');
  };

    const handleGenerateAvatar = () => {
      alert("Generating 3D Avatar for you ...");
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
            <li className="navbar-item" onClick={handleMangosClick}>MANGOS</li>
            <li className="navbar-item">Contact Us</li>
          </ul>
        </div>
        {/* Show QR code section only if no photos uploaded */}
        {capturedPhotos.length === 0 ? (
          <>
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
          </>
        ) : (
          /* Display only captured photos when uploaded */
          <div className="captured-photos-section">
            <div className="photos-grid">
              {capturedPhotos.slice(0, 3).map((photo, index) => (
                <div key={index} className="photo-item">
                  <img
                    src={photo}
                    alt={`Uploaded photo ${index + 1}`}
                    className="uploaded-photo"
                  />
                </div>
              ))}
            </div>

            <div className='avatar-generate-button-container'>
              <button className='avatar-generate-button' onClick={handleGenerateAvatar}>Generate 3D Avatar</button>
             </div>

          </div>
        )}
      </div>
    </>
  );
}

export default QRCodePage;