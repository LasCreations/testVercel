"use client"; // Ensures it's a client component

import React, { useRef, useCallback } from "react";
import Webcam from "react-webcam";

export default function Home() {
  const webcamRef = useRef<Webcam>(null);

  // Video constraints to force back camera
  const videoConstraints = {
    facingMode: "environment", // Prefers back camera
  };

  // Capture image function (optional)
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    console.log("Captured Image:", imageSrc);
  }, [webcamRef]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Webcam Feed</h1>
      <Webcam
        ref={webcamRef}
        videoConstraints={videoConstraints}
        mirrored={false} // Ensures correct orientation for back camera
        screenshotFormat="image/jpeg"
        style={{ width: "100%", height: "auto" }}
      />
      <button onClick={capture} style={{ marginTop: "10px", padding: "10px" }}>
        Capture Photo
      </button>
    </div>
  );
}

