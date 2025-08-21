import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MobileWebPage() {
  const navigate = useNavigate();
  
  // Instructions
  const instructions = [
    "Please tie your hair.",
    "Ensure good lighting.",
    "Take off your glasses."
  ];
  const [currentStep, setCurrentStep] = useState(0);
  const [showInstructions, setShowInstructions] = useState(true);

  // Camera and photo state
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState('');
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(false);

  const handleUploadPic = () => {
    navigate('/qr-code', { state: { capturedPhotos: photos } });
  }

  const handleNextInstruction = () => {
    if (currentStep < instructions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleStartCamera = () => {
    setShowInstructions(false);
    startCamera();
  };

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      streamRef.current = mediaStream;
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      setIsCameraReady(true);
      setIsCameraActive(true);
    } catch (err) {
      setError('Error accessing camera. Please allow camera permission.');
    }
  };

 
  useEffect(() => {
    if (!showInstructions) {
      startCamera();
    }
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, [showInstructions]);

  const handleRetakePhotos = () => {
    setPhotos([]);
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }
    startCamera();
  };

  const handleCapture = () => {
    if (photos.length >= 3 || !videoRef.current || !canvasRef.current || !isCameraActive) return;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const width = 320;
    const height = (video.videoHeight / video.videoWidth) * width;
    canvas.width = width;
    canvas.height = height;

    ctx.drawImage(video, 0, 0, width, height);
    const dataUrl = canvas.toDataURL('image/jpeg');
    setPhotos((prev) => [...prev, dataUrl]);
  };

  const handleButtonClick = () => {
    if (photos.length < 3) {
      handleCapture();
    }
  };

  const isAllPhotosTaken = photos.length === 3;

  const getStatusMessage = () => {
    const count = photos.length;
    if (count === 0) return 'No photos taken yet';
    if (count === 1) return 'One of three photos taken';
    if (count === 2) return 'Two of three photos taken';
    if (count === 3) return 'All three photos taken';
  };

  return (
    <div className="mobile-webpage">
      {showInstructions ? (
        <div className="instructions-container">
          <div className="instruction-slide">
            <p className="instruction-text">{instructions[currentStep]}</p>
            <div className="buttons">
              {currentStep < instructions.length - 1 ? (
                <button className="next-btn" onClick={handleNextInstruction}>Next</button>
              ) : (
                <button className="start-btn" onClick={handleStartCamera}>Start</button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          {!isAllPhotosTaken ? (
            <div className="camera-section">
              <h2 className="title">Camera Capture App</h2>
              <div className="camera-box">
                {error ? (
                  <p className="error">{error}</p>
                ) : (
                  <>
                    {isCameraReady ? (
                      <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        className="video"
                      />
                    ) : (
                      <p className="loading">Loading camera...</p>
                    )}
                  </>
                )}
              </div>
              <p className="status">{getStatusMessage()}</p>
              <canvas ref={canvasRef} className="hidden-canvas" />
              <div className="button-container">
                <button
                  onClick={handleButtonClick}
                  disabled={photos.length >= 3}
                  className={`capture-button ${photos.length >= 3 ? 'disabled' : ''}`}
                >
                  {photos.length === 0 ? 'Capture' : 'Capture Next'}
                </button>
              </div>
            </div>
          ) : (
            <div className="results-section">
              <h2 className="section-title">Captured Photos</h2>
              <div className="photos-container">
                {photos.map((photo, index) => (
                  <img
                    key={index}
                    src={photo}
                    alt={`Captured ${index + 1}`}
                    className="captured-photo"
                  />
                ))}
              </div>
              <div className="buttons-group">
                <button className="retake-button" onClick={handleRetakePhotos}>
                  Retake the pictures
                </button>
                <button className="upload-button" onClick={handleUploadPic}>
                  Upload Photos
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default MobileWebPage;