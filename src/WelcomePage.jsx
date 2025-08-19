import { useNavigate } from 'react-router-dom';
import Avatar1 from './assets/avatar1.png';
import Avatar2 from './assets/avatar2.png';
import Avatar3 from './assets/avatar3.png';
import Avatar4 from './assets/avatar4.png';
import centerimage from './assets/centerimage.jpg';
import avatar5 from './assets/avatar5.jpg';

function WelcomePage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/camera-code', '_blank', 'noopener,noreferrer');
  };

  const handleHomeClick = () => {
    window.location.href = '/';
  };

  const handleAboutChulaClick = () => {
    navigate('/about-chula');
  };

  return (
    <div className="welcome-page">
      {/* Navbar */}
      <div className="navbar-container">
        <a className="navbar-chulaavatar-logo" onClick={handleHomeClick}>ChulaAvatar</a>
        <ul className="navbar-menu">
          <li className="navbar-item" onClick={handleAboutChulaClick}>About ChulaAvatar</li>
          <li className="navbar-item">MANGOS</li>
          <li className="navbar-item">Contact Us</li>
        </ul>
      </div>

      {/* Welcome text and avatar icons */}
      <div className="welcome-container">
        <h1 className="welcome-h1">Welcome to ChulaAvatar</h1>
        <p className="welcome-p">
          Experience the top-notch technology with ChulaAvatar. You can create your lifelike-3D Avatar
          with one click of your selfie camera.
        </p>

        <div className="avatar-icons">
          <img src={Avatar1} alt="Avatar 1" className="avatar-icon" />
          <img src={Avatar2} alt="Avatar 2" className="avatar-icon" />
          <img src={Avatar3} alt="Avatar 3" className="avatar-icon" />
          <img src={Avatar4} alt="Avatar 4" className="avatar-icon" />
        </div>

        {/* Centered button */}
        <div className="generate-button-container">
          <button onClick={handleButtonClick} className="welcome-generate-avatar">
            Create Avatar
          </button>
        </div>
      </div>

     
      <div className="main-content-container">
        <div className="centerimage">
          <img src={centerimage} alt="Centered" />
        </div>

      
        <div className="bottom-left-button-container">
          <button onClick={handleButtonClick} className="welcome-generate-avatar">
            Create Avatar
          </button>
        </div>

         <div className='info-text-container'>
            <h2>3D Human Avatar Creation for Metaverse</h2>
            <p>This paper presents the process of creating 3D human avatars from reconstructed 3D face produced by PRNet model.</p>
        </div>

        <div className="avatar5-container">
          <img src={avatar5} alt="Avatar 5" />
        </div>
      
        
      </div>
    </div>
  );
}

export default WelcomePage;
