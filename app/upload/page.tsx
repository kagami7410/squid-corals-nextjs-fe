'use client'
import React from 'react'
import axios from 'axios';
import { ChangeEvent, useState } from 'react';


const Page = () => {

    // File is stored in the state as type File or null if not selected.
    const [file, setFile] = useState<File | null>(null);
    const [videoFile, setVideoFile] = useState<File | null>(null);

    const [status, setStatus] = useState<string>('');
    const [imageName, setImageName] = useState<string>('');
    const [videoUrl, setVideoUrl] = useState<string>('');

    // Handle file selection
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0] || null;
        setFile(selectedFile);
    };

    // Handle form submission and upload the image to the server
    const handleUpload = async (event: React.FormEvent) => {
        event.preventDefault(); // Prevent default form submission

        if (!file) {
            setStatus('Please select a file!');
            return;
        }

        const formData = new FormData();
        formData.append('image', file);


        try {
            console.log("file: ", file)
            const res = await axios.post('http://localhost:8000/upload',formData, {
              method: 'POST',
              headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaWF0IjoxNzI3MTcyNDE4LCJleHAiOjE3MjcxNzYwMTh9.9R4NeNQrqUMfHzYV85hH8tfAHq3wkWcjNEUyd50dg7s`
              },
            });
            setStatus('Image uploaded successfully!');
            setImageName(res.data.fileUrl);

            const data = await res.data;
            console.log(data);
          } catch (err) {
            console.error('Error uploading image:', err);
            setStatus('Error uploading image!');
          }
    }


    // -------------------------------- Video Upload -----------------------------
    const handleVideoFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0] || null;
        setVideoFile(selectedFile);
    };


    // Handle form submission and upload the image to the server
    const handleVideoUpload = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!videoFile) {
            setStatus('Please select a video!');
            return;
        }

        const formData = new FormData();
        formData.append('video', videoFile); // The form field name must match 'video'

        try {
            const response = await axios.post('http://localhost:8000/uploadvideo', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaWF0IjoxNzI3MTMxMDUwLCJleHAiOjE3MjcxMzQ2NTB9.GCK2Afzbf0iIFYt_ywde6lp4iSJFWVJVJtTU7kV5UnM`

                },
            });

            setStatus('Video uploaded successfully!');
            setVideoUrl(response.data.fileUrl);
        } catch (error) {
            console.error('Error uploading video:', error);
            setStatus('Error uploading video!');
        }
    };
    return (
        <div>
            <div>
                <h1>Upload an Image</h1>
                <form onSubmit={handleUpload}>
                    <input type="file" onChange={handleFileChange} accept="image/*" />
                    <button className='btn' type="submit">Upload</button>
                </form>
                <p>{status}</p>

                {/* Show the uploaded image once the upload is successful */}
                {imageName && (
                    <div>
                        <h2>Uploaded Image:</h2>
                        <img src={`/upload/api?imageName=${imageName}`} alt="Uploaded" style={{ width: '300px' }} />
                    </div>
                )}
            </div>


            <div>
                <h1>Upload a Video</h1>
                <form onSubmit={handleVideoUpload}>
                    <input type="file" onChange={handleVideoFileChange} accept="video/*" />
                    <button type="submit">Upload</button>
                </form>

                <p>{status}</p>

                {videoUrl && (
                    <div>
                        <h2>Uploaded Video:</h2>
                        <video width="400" controls>
                            <source src={`http://localhost:8000${videoUrl}`} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                )}
            </div>

        </div>

    )
}

export default Page
