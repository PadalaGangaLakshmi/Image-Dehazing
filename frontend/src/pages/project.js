import React, { useState } from 'react';
import axios from 'axios';
import './project.css'; // Make sure to include your custom CSS file

const Project = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [dehazedImageUrl, setDehazedImageUrl] = useState(null);
  const [originalImageUrl, setOriginalImageUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setOriginalImageUrl(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!selectedFile) return alert("Please select a file first.");

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://127.0.0.1:8000/upload/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.data.dehazed_url) {
        setDehazedImageUrl(response.data.dehazed_url);  // Show processed image
      } else {
        alert("Image processing failed. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading the file:", error);
      alert("Failed to upload and process the image.");
    }
  };


  return (
    <div className="project-page">
      <h1>Upload Your Image for Dehazing</h1>
      <div className="upload-container">
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload} className="upload-button">Upload</button>
      </div>

      <div className="image-display">
        {originalImageUrl && (
          <div>
            <h2>Original Image</h2>
            <img src={originalImageUrl} alt="Original" className="image" />
          </div>
        )}
        {dehazedImageUrl && (
          <div>
            <h2>Dehazed Image</h2>
            <img src={dehazedImageUrl} alt="Dehazed" className="image" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
