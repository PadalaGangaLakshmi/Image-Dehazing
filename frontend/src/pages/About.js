import React from "react";

const About = () => {

  const styles = {
    container: {
      padding: "2rem",
      maxWidth: "1000px",
      margin: "auto",
      fontFamily: "'Roboto', sans-serif",
      color: "#2c3e50",
    },
    title: {
      textAlign: "center",
      fontSize: "3.2rem",
      background: "linear-gradient(45deg, #2980b9, #8e44ad)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      marginBottom: "1.5rem",
      textShadow: "2px 2px 5px rgba(0,0,0,0.1)",
      animation: "fadeIn 1.5s",
    },
    description: {
      fontSize: "1.3rem",
      lineHeight: "1.8",
      marginBottom: "2rem",
      textAlign: "justify",
      color: "#2c3e50",
    },
    sectionTitle: {
      color: "#8e44ad",
      fontSize: "1.8rem",
      marginBottom: "1rem",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "1rem",
    },
    th: {
      backgroundColor: "#34495e",
      color: "white",
      padding: "10px",
      border: "1px solid #ddd",
    },
    td: {
      padding: "10px",
      border: "1px solid #ddd",
      transition: "background-color 0.3s",
    },
    trHover: {
      backgroundColor: "#ecf0f1",
    },
    image: {
      maxWidth: "100%",
      height: "auto",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    },
    list: {
      fontSize: "1.1rem",
      lineHeight: "1.8",
    },
  };

  return (
    <div style={styles.container}>
      
      {/* 🌫️ Project Title */}
      <h3 style={styles.title}>Image Dehazing Using Deep Learning</h3>
      
      {/* 📜 Project Description */}
      <p style={styles.description}>
        This project aims to enhance the visibility and quality of hazy images using <strong>Deep Learning</strong>. 
        Built with <strong>React</strong> for the frontend, <strong>FastAPI</strong> for the backend, and the <strong>DehazeFormer</strong> model for dehazing.
      </p>

      {/* 👥 Team Progress */}
      <section>
        <h3 style={styles.sectionTitle}>👥 Team Progress:</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>👤 Name</th>
              <th style={styles.th}>💼 Role</th>
              <th style={styles.th}>📋 Responsibilities</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "Vasantha", role: "Backend Development (Model Implementation)", tasks: "Loading DehazeFormer model, implementing inference using PyTorch." },
              { name: "Ganga Lakshmi", role: "Backend Development (API Development)", tasks: "Setting up FastAPI backend, handling image upload, retrieval, and API creation." },
              { name: "Blessy", role: "Frontend Development (UI Design)", tasks: "Creating a responsive UI using React components." },
              { name: "Ratnanjali", role: "Frontend Development (Interaction & Logic)", tasks: "Implementing API requests, handling errors, and user notifications." },
              { name: "Jisha", role: "Integration (Frontend & Backend)", tasks: "Connecting React frontend with FastAPI backend for smooth communication." },
            ].map((member, index) => (
              <tr key={index} style={index % 2 === 0 ? styles.trHover : {}}>
                <td style={styles.td}>{member.name}</td>
                <td style={styles.td}>{member.role}</td>
                <td style={styles.td}>{member.tasks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* 📊 Final Outcome */}
      <section style={{ marginBottom: "2rem" }}>
        <h3 style={styles.sectionTitle}>📊 Final Outcome:</h3>
        <div style={{ textAlign: "center", margin: "1.5rem 0" }}>
        <img 
  src="https://user-images.githubusercontent.com/13918778/84451641-8471fc80-ac08-11ea-8a7d-59f566b1c3bb.JPG" 
  alt="Before and After Dehazing Comparison" 
  style={styles.image}
/>

          <p style={{ fontSize: "1rem", color: "#7f8c8d" }}>Before and After Dehazing Comparison</p>
        </div>
      </section>

      {/* 🔮 Future Enhancements */}
      <section style={{ marginBottom: "2rem" }}>
        <h3 style={styles.sectionTitle}>🔮 Future Enhancements:</h3>
        <ul style={styles.list}>
          <li>Improving model accuracy using Vision Transformers.</li>
          <li>Supporting batch processing of images.</li>
          <li>Deploying the application on AWS or Azure.</li>
          <li>Adding image enhancement techniques for better clarity.</li>
          <li>Creating a mobile-friendly version.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
