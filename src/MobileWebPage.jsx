import React, { useRef, useState, useEffect } from 'react';


function MobileWebPage ()  {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const [cameraActive, setCameraActive] = useState(false);

  useEffect(() => {
    console.log('getUserMedia supported:', !!navigator.mediaDevices?.getUserMedia);
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' },
        audio: false,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setCameraActive(true);
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
      alert(
        'Camera access denied or not supported.\nUse HTTPS or localhost and allow camera permissions.'
      );
    }
  };

  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const size = 300;
    canvas.width = size;
    canvas.height = size;

    const cam = canvas.getContext('2d');
    cam.drawImage(video, 0, 0, size, size);
    setPhoto(canvas.toDataURL('image/png'));
  };

  useEffect(() => {
    return () => {
      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="mobile-camera-container">
      {!cameraActive ? (
        <button className="mobile-camera-button" onClick={startCamera}>
          Start Camera
        </button>
      ) : (
        <>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="mobile-camera-video"
          />
          <button className="mobile-camera-button" onClick={capturePhoto}>
            Capture Photo
          </button>
        </>
      )}
      <canvas ref={canvasRef} className="hidden-canvas" />
      {photo && (
        <div className="photo-preview">
          <h3>Captured Photo:</h3>
          <img src={photo} alt="Captured" />
        </div>
      )}
    </div>
  );
};

export default MobileWebPage;
