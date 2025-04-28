# 🌫️IMAGE DEHAZING 

## 📖 Overview  
Image dehazing aims to **enhance the clarity and quality of images affected by haze** using deep learning techniques. This project involves building a **React-based user interface**, a **FastAPI backend** for processing requests, and a **DehazeFormer model** for image enhancement.  

---

## 💡 Technologies Used:-  
### 🌐 Frontend (User Interface)  
- **⚛️ React**: Creating an interactive and responsive user interface for uploading and displaying results.  
- **🖼️ Gradio**: Providing a user-friendly web interface that interacts with the backend model (can be used for quick demos).  

### 🔙 Backend (Server & Model Handling)  
- **PyTorch**: Building, training, and loading the DehazeFormer model.  
- **FastAPI**: Creating API endpoints for handling requests from the frontend and processing images.  
- **DehazeFormer**: Transformer-based deep learning model for image dehazing.  
- **Pillow (PIL)**: Image processing (loading, enhancing, saving, filtering).  
- **NumPy**: Handling numerical operations and converting images to arrays.  
- **Shutil**: Managing file operations (saving, deleting files).  

### 🔗 Connection (Frontend & Backend Communication)  
- **CORS Middleware (FastAPI)**: Enabling cross-origin requests between React (frontend) and FastAPI for smooth communication.  
- **Gradio**: Serving the model via a web interface or API for integration with the frontend.  

---

## 🎯 Purpose :- 
The purpose of this project is to **remove haze from images and enhance visibility** using a trained deep learning model. This solution can be applied to various fields, including:  
- 🚗 **Autonomous Driving**  
- 📸 **Photography**  
- 🛡️ **Surveillance Systems**  

---

## 📁 Installation & Usage  

### 🔍 Clone the Repository  
```bash

git clone <repository-link>
```

### ⚙️ Backend Setup (FastAPI)  
```bash
# Navigate to the backend directory
cd backend

# Navigate to the DehazeFormer directory
cd dehazeformer

# Install dependencies
pip install fastapi torch pillow numpy gradio

# Run the FastAPI server
uvicorn main:app --reload
```

### 💻 Frontend Setup (React)  
```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Run the React app
npm start
```

---

## 📊 Output (Before & After Dehazing Comparison)  
The model enhances hazy images by learning dehazing patterns using the DehazeFormer model.  


![Screenshot 2025-04-04 154137](https://github.com/user-attachments/assets/c5f4bc03-ba44-47f1-9eb9-f95e242db865)



## 🌟 Features  
- 📤 Upload images and view dehazing results in real-time.  
- 📈 Display before-and-after comparisons.  
- 📷 Supports various image formats (JPEG, PNG, etc.).  

---

## 🤝 Contribution  
Contributions are welcome! Feel free to **open issues or submit pull requests** to improve this project.  

---

