import React, { useState } from "react";
import axios from "axios";

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return;

    const formData = new FormData();
    formData.append("file", image); // Note: Use "file" as the key if Gradio expects it

    try {
      const response = await axios.post("http://127.0.0.1:7861/api/predict", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        responseType: "blob", // Ensure we receive the processed image
      });

      const imageBlob = new Blob([response.data], { type: "image/png" });
      const imageUrl = URL.createObjectURL(imageBlob);
      setProcessedImage(imageUrl);
    } catch (error) {
      console.error("Error processing image:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center mt-4">
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Upload and Dehaze</button>
      </form>
      {processedImage && (
        <div className="mt-4">
          <h2>Processed Image:</h2>
          <img src={processedImage} alt="Processed" className="mt-2" />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
