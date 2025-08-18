import WelcomePage from "./WelcomePage"
import CameraPage from "./CameraPage"
import QRCodePage from "./QRCodePage"
<<<<<<< HEAD
import AboutChulaAvatarPage from "./AboutChulaAvatarPage";
=======
import MobileWebPage from "./MobileWebPage";
>>>>>>> eb5978fcb07cc23b1a48aa5ed8ec8f6a0107631b
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/about-chula" element={<AboutChulaAvatarPage />} />
                <Route path="/camera-code" element={<CameraPage />} />
                <Route path="/qr-code" element={<QRCodePage/>}/>
                <Route path="/mobile-webpage" element={<MobileWebPage />} />
            </Routes>
        </Router>
    );
}

export default App
