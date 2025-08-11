import WelcomePage from "./WelcomePage"
import CameraPage from "./CameraPage"
import QRCodePage from "./QRCodePage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/camera-code" element={<CameraPage />} />
                <Route path="/qr-code" element={<QRCodePage/>}/>
            </Routes>
        </Router>
    );
}

export default App
