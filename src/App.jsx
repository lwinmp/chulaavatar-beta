import WelcomePage from "./WelcomePage"
import CameraPage from "./CameraPage"
import QRCodePage from "./QRCodePage"
import MobileWebPage from "./MobileWebPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/camera-code" element={<CameraPage />} />
                <Route path="/qr-code" element={<QRCodePage/>}/>
                <Route path="/mobile-webpage" element={<MobileWebPage />} />
            </Routes>
        </Router>
    );
}

export default App
