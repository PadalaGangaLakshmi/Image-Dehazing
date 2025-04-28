from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse
import torch
import numpy as np
import os
import shutil
from PIL import Image, ImageFilter, ImageEnhance  # Added ImageEnhance for contrast adjustment
import cv2
from models import dehazeformer  # Import your model definition

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_DIR = "uploaded_images"
DEHAZED_DIR = "dehazed_images"

os.makedirs(UPLOAD_DIR, exist_ok=True)
os.makedirs(DEHAZED_DIR, exist_ok=True)

# Load the pretrained model once and use it for all requests
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
network = dehazeformer().to(device)
checkpoint = torch.load('./saved_models/dehazeformer.pth', map_location=device)
network.load_state_dict(checkpoint['state_dict'])
network.eval()

def dehaze_image(image_path: str, output_path: str):
    raw_image = Image.open(image_path).convert("RGB")
    
    # Maintain original resolution
    original_size = raw_image.size

    # Resize the image if it's too large
    max_dimension = 1024
    if max(raw_image.size) > max_dimension:
        raw_image.thumbnail((max_dimension, max_dimension), Image.LANCZOS)
    
    # Convert image to tensor
    image = np.array(raw_image, np.float32) / 255.0
    image = (image - 0.5) * 2  # Normalize to [-1, 1] range
    image = torch.from_numpy(image).permute((2, 0, 1)).unsqueeze(0).to(device)

    with torch.no_grad():
        output = network(image).clamp_(-1, 1)[0] * 0.5 + 0.5
        output = output.permute((1, 2, 0)).cpu().numpy()
        output = np.clip(output * 255.0, 0, 255).astype(np.uint8)

    # Convert the output to PIL Image
    output_image = Image.fromarray(output)

    # Resize to original size if needed
    if output_image.size != original_size:
        output_image = output_image.resize(original_size, Image.LANCZOS)
    
    # Apply sharpening filter for clarity
    output_image = output_image.filter(ImageFilter.SHARPEN)
    
    # Enhance contrast for better clarity
    enhancer = ImageEnhance.Contrast(output_image)
    output_image = enhancer.enhance(1.5)
    
    # Save the processed image
    output_image.save(output_path)

@app.post("/upload/")
async def upload_file(file: UploadFile = File(...)):
    file_path = os.path.join(UPLOAD_DIR, file.filename)
    
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    dehazed_path = os.path.join(DEHAZED_DIR, file.filename)
    dehaze_image(file_path, dehazed_path)

    return JSONResponse({"dehazed_url": f"http://127.0.0.1:8000/dehazed/{file.filename}"})

@app.get("/dehazed/{filename}")
async def get_dehazed_image(filename: str):
    file_path = os.path.join(DEHAZED_DIR, filename)
    return FileResponse(file_path)
