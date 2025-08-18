import { useNavigate } from 'react-router-dom';
import Avatar1 from './assets/avatar1.png';
import Avatar2 from './assets/avatar2.png';
import Avatar3 from './assets/avatar3.png';
import Avatar4 from './assets/avatar4.png';
import centerimage from './assets/centerimage.jpg';
import avatar5 from './assets/avatar5.jpg';

function WelcomePage(){
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/camera-code', '_blank', 'noopener,noreferrer');
       // window.open(window.location.origin + '/qr-code', '_blank', 'noopener,noreferrer');
    };

    const handleHomeClick = () => {
      // navigate('/');
       window.location.href = '/';
        //window.open(window.location.origin + '/', '_blank', 'noopener,noreferrer');
    };

    const handleAboutChulaClick = () => {
       navigate('/about-chula');
       //window.location.href = '/';
        //window.open(window.location.origin + '/', '_blank', 'noopener,noreferrer');
    };
    
    return(
        <>
            <div className='welcome-page'>
                <div className='navbar-container'>
                    <a className='navbar-chulaavatar-logo' onClick={handleHomeClick}>ChulaAvatar</a>
                    <ul className='navbar-menu'>
                        <li className='navbar-item' onClick={handleAboutChulaClick}>About ChulaAvatar</li>
                        <li className='navbar-item'>MANGOS</li>
                        <li className='navbar-item'>Contact Us</li>
                    </ul>
                </div>

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
                </div>

                <div className="generate-button-container"> 
                    <button onClick={handleButtonClick} className="welcome-generate-avatar">Create Avatar</button>
                </div>

                <div> 
                    <div className="centerimage">
                        <img src= {centerimage} alt="Centered" />
                    </div>
                </div>
                <div className ="bottom-left-button-container">
                    <button onClick={handleButtonClick} className="welcome-generate-avatar">
                        Create Avatar
                    </button>
                </div>

                <div>
                    <div className="avatar5-container">
                        <img src={avatar5} alt="Right side" />
                    </div>
                </div>

            </div>
        </>
    );
}
export default WelcomePage