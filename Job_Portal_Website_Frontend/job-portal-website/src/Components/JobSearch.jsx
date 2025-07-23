import '../Styling/Jobsearching.css';
import { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const JobSearch = () => {
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userName = localStorage.getItem("loggedInUser");

  useEffect(() => {
    if (userName) {
      setIsLoggedIn(true);
    }
  }, [userName]);

  const handleFileSelect = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("userName", userName); 

    try {
      await axios.post(
        "http://localhost:9090/userregistration/uploadresume",
        formData,
        {
            headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Resume uploaded successfully!");
    } catch (error) {
      console.error("Upload error:", error);
      alert("Failed to upload resume.");
    }
  };

  const handleButtonClick = () => {
    if (!isLoggedIn) {
      alert("Please login first to upload your resume.");
      navigate("/loginpage"); 
      return;
    }

    fileInputRef.current.click();
  };

  return (
    <div className="job-searching">
      <h1>Ready to start your job search?</h1>
      <p>Join thousands of professionals who found their dream jobs through our platform.</p>
      <div className="upload-resume">
        {isLoggedIn ? (
         <>
            <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            accept=".pdf,.doc,.docx"
            onChange={handleFileSelect}
          />
          <button onClick={handleButtonClick}>Upload Your Resume</button>
         </>) : (<button onClick={handleButtonClick}>Login to Upload Resume</button> )
      }
     </div>
    </div>
  );
};

export default JobSearch;
