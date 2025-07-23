import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import '../Styling/JobPostForm.css';
import axios from "axios";

const JobPostForm = () => {
  const navigate = useNavigate();
   
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("employeeLoggedIn");
    if (isLoggedIn !== "true") {
      alert("Please login as employee to post a job.");
      navigate("/employee-login");
    }
  }, [navigate]);

  const [formData, setFormData] = useState({
    companyName: "",
    jobTitle: "",
    jobDescription: "",
    jobType: "",
    experienceRequired: "",
    location: "",
    salaryRange: "",
    skillsRequired: "",
    educationalQualification: "",
    numberOfOpenings: "",
    applicationDeadline: "",
    contactInfo: "",
    companyWebsite: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:9090/userregistration/savejobpostingdetails", formData)
      .then((response) => {
        alert("Job posted successfully!");
        console.log(response.data);
        setFormData({
          companyName: "",
          jobTitle: "",
          jobDescription: "",
          jobType: "",
          experienceRequired: "",
          location: "",
          salaryRange: "",
          skillsRequired: "",
          educationalQualification: "",
          numberOfOpenings: "",
          applicationDeadline: "",
          contactInfo: "",
          companyWebsite: "",
        });
      })
      .catch((error) => {
        alert("Error JobPosted");
        console.error(error);
      });
    };

  return (
    <div className="job-posting-form">
      <Header />
      <div className='job-posting'>
      <div className="form-container">
        <h2 className="form-title">Job Posting Form</h2>
        <form onSubmit={handleSubmit} className="job-form">
          {[
            { label: "Company Name", name: "companyName" },
            { label: "Job Title", name: "jobTitle" },
            { label: "Location", name: "location" },
            { label: "Salary Range", name: "salaryRange" },
            { label: "Skills Required", name: "skillsRequired" },
            { label: "Educational Qualification", name: "educationalQualification" },
            { label: "No. of Openings", name: "numberOfOpenings" },
            { label: "Application Deadline", name: "applicationDeadline", type: "date" },
            { label: "Contact Email / Phone", name: "contactInfo" },
            { label: "Company Website", name: "companyWebsite" },
          ].map(({ label, name, type = "text" }) => (
            <div key={name} className="form-group">
              <label>{label}</label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
              />
            </div>
          ))}

          <div className="form-group">
            <label>Job Type</label>
            <select
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              required
            >
              <option value="">Select Type</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Internship</option>
              <option>Contract</option>
            </select>
          </div>

          <div className="form-group">
            <label>Experience Required</label>
            <select
              name="experienceRequired"
              value={formData.experienceRequired}
              onChange={handleChange}
              required
            >
              <option value="">Select Experience</option>
              <option>Fresher</option>
              <option>0-2 Years</option>
              <option>3+ Years</option>
            </select>
          </div>

          <div className="form-group">
            <label>Job Description</label>
            <textarea
              name="jobDescription"
              value={formData.jobDescription}
              onChange={handleChange}
              rows={5}
              required
            ></textarea>
          </div>
          <div className="form-submit">
            <button type="submit">Post Job</button>
          </div>
        </form>
      </div>
       </div>
      <Footer />
     
    </div>
  );
};

export default JobPostForm;
