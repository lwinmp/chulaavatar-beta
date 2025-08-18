import React, { useRef, useState, useEffect } from 'react';


const MobileWebPage = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const [cameraActive, setCameraActive] = useState(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' },
        audio: false,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play(); // Ensure video starts
        setCameraActive(true);
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
      alert(
        'Camera access was denied or not supported.\n' +
        'Use HTTPS or localhost and allow camera permissions.'
      );
    }
  };

  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) return;

    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = canvas.toDataURL('image/png');
    setPhoto(imageData);
  };

  useEffect(() => {
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="mobile-camera-container">
      {!cameraActive && (
        <button className="mobile-camera-button" onClick={startCamera}>
          Start Camera
        </button>
      )}

      {cameraActive && (
        <div>
          <video
            className="video-preview"
            ref={videoRef}
            autoPlay
            playsInline
            muted
          />
          <button className="mobile-camera-button" onClick={capturePhoto}>
            Capture
          </button>
        </div>
      )}

      <canvas ref={canvasRef} className="hidden-canvas" />

      {photo && (
        <div className="photo-preview-container">
          <h3>Captured Photo:</h3>
          <img src={photo} alt="Captured" className="photo-preview" />
        </div>
      )}
    </div>
  );
};

export default MobileWebPage;
