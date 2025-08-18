import { useNavigate } from 'react-router-dom';
import React, {useState} from 'react';

function CameraPage() {
    const navigate = useNavigate();
    const handleCameraButtonClick = () => {
        navigate('/qr-code', '_blank', 'noopener,noreferrer');
    };
    const handleHomeClick = () => {
        navigate('/');
    };
    const handleAboutChulaClick = () => {
       navigate('/about-chula');
       //window.location.href = '/';
        //window.open(window.location.origin + '/', '_blank', 'noopener,noreferrer');
    }

    return (
        <> 
            <div className='welcome-page'>
                <div className='navbar-container'>
                    <a className='navbar-chulaavatar-logo' onClick={handleHomeClick}>
                        ChulaAvatar
                    </a>
                    <ul className='navbar-menu'>
                        <li className='navbar-item' onClick={handleAboutChulaClick}>About ChulaAvatar</li>
                        <li className='navbar-item'>MANGOS</li>
                        <li className='navbar-item'>Contact Us</li>
                    </ul>
                </div>

                <div className='create-avatar-container'>
                    <h1 className='create-avatar-h1'>𐀪 Create a new avatar 𐀪</h1>
                </div>

                <div className='camera-button-container'>
                    <button className='camera-button' onClick={handleCameraButtonClick}>
                        <span>Use Camera</span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default CameraPage;
