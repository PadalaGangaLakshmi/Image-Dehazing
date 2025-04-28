// pages/Home.js
import React from "react";

const About = () => {
  return (
    <div style={{ padding: "2rem", maxWidth: "1000px", margin: "auto", fontFamily: "'Roboto', sans-serif", color: "#2c3e50" }}>
      <h2 style={{ textAlign: "center", fontSize: "2.8rem", color: "#2980b9", marginBottom: "1.5rem" }}>
        🌫️ IMAGE DEHAZING
      </h2>

      <p style={{ fontSize: "1.2rem", lineHeight: "1.8", marginBottom: "2rem" }}>
        Image dehazing aims to enhance the clarity and quality of images affected by haze using 
        <strong> deep learning techniques</strong>. This project involves building a <strong>React-based user interface</strong>, 
        a <strong>FastAPI backend</strong> for processing requests, and a <strong>DehazeFormer model</strong> for image enhancement.
      </p>

      {/* Frontend Section */}
      <section style={{ marginBottom: "2rem" }}>
        <h3 style={{ color: "#8e44ad", fontSize: "1.8rem" }}>🌟 Frontend (User Interface)</h3>
        <ul style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
          <li>✅ <strong>React</strong>: Creating an interactive and responsive user interface for uploading and displaying results.</li>
          <li>✅ <strong>Gradio</strong>: Providing a user-friendly web interface that interacts with the backend model (can be used for quick demos).</li>
        </ul>
      </section>

      {/* Backend Section */}
      <section style={{ marginBottom: "2rem" }}>
        <h3 style={{ color: "#8e44ad", fontSize: "1.8rem" }}>🌟 Backend (Server & Model Handling)</h3>
        <ul style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
          <li>✅ <strong>PyTorch</strong>: Building, training, and loading the DehazeFormer model.</li>
          <li>✅ <strong>FastAPI</strong>: Creating API endpoints for handling requests from the frontend and processing images.</li>
          <li>✅ <strong>DehazeFormer</strong>: Transformer-based deep learning model for image dehazing.</li>
          <li>✅ <strong>Pillow (PIL)</strong>: Image processing (loading, enhancing, saving, filtering).</li>
          <li>✅ <strong>NumPy</strong>: Handling numerical operations and converting images to arrays.</li>
          <li>✅ <strong>Shutil</strong>: Managing file operations (saving, deleting files).</li>
        </ul>
      </section>

      {/* Connection Section */}
      <section style={{ marginBottom: "2rem" }}>
        <h3 style={{ color: "#8e44ad", fontSize: "1.8rem" }}>🌟 Connection (Frontend & Backend Communication)</h3>
        <ul style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
          <li>✅ <strong>CORS Middleware (FastAPI)</strong>: Enabling cross-origin requests between React (frontend) and FastAPI (backend) for smooth communication.</li>
          <li>✅ <strong>Gradio</strong>: Serving the model via a web interface or API for integration with the frontend.</li>
        </ul>
      </section>


      <section style={{ marginBottom: "2rem" }}>
        <h3 style={{ color: "#8e44ad", fontSize: "1.8rem" }}>📌 Purpose:</h3>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
          The purpose of this project is to remove haze from images and enhance visibility using a trained deep learning model. 
          This solution can be applied to various fields, including <strong>Autonomous Driving</strong>, <strong>Photography</strong>, 
          and <strong>Surveillance Systems</strong>.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h3 style={{ color: "#8e44ad", fontSize: "1.8rem" }}>📊 Output:</h3>
        <div style={{ textAlign: "center", margin: "1.5rem 0" }}>
          <img 
            src="https://user-images.githubusercontent.com/13918778/84451353-b0d94900-ac07-11ea-8f1b-3791e9f2f600.JPG" 
            alt="Before and After Dehazing Comparison" 
            style={{ maxWidth: "100%", height: "auto", borderRadius: "8px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }} 
          />
          <p style={{ fontSize: "1rem", color: "#7f8c8d" }}>Before and After Dehazing Comparison</p>
        </div>
      </section>
    </div>
  );
};

export default About;
