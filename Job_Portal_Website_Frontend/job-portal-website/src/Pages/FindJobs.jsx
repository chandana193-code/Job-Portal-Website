import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Search, MapPin } from 'lucide-react';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import JobSearch from '../Components/JobSearch';
import '../Styling/FindJobs.css';

import axios from 'axios';

const FindJobs = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const loggedInUser = localStorage.getItem("loggedInUser");

  useEffect(() => {
    axios.get(`http://localhost:9090/userregistration/alljobs`)
      .then((res) => {
        setJobs(res.data);
        setFilteredJobs(res.data);
      })
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []);

  const handleSearch = () => {
    axios.get(`http://localhost:9090/userregistration/search`, {
     params: { title, location }
    })
      .then((res) => setFilteredJobs(res.data))
      .catch((err) => console.error("Error searching jobs:", err));
  };

  return (
    <div className='find-job-maincontainer'>
      <Header/>
      <div className='find-job'>
        <div className='find-job-text'>
          <h1>Your job search starts here</h1>
          <p>Search from over millions jobs, save the ones you love, and apply in seconds.</p>
        </div>
      <div className='find-job-container'>
      <div className='search-bar'>
         <Search className="icon" size={20} />
          <input
            type="text"
            placeholder="Job title"
            className="input-field"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
      </div>
        <div className='search-bar'>
          <MapPin className="icon" size={20} />
           <input
              type="text"
              placeholder="Location"
              className="input-field"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <button className='clear-btn' onClick={() => {
              setTitle('');
              setLocation('');
              setFilteredJobs(jobs);
            }}>&times;</button>
          </div>
          <button className='find-jobs-btn' onClick={handleSearch}>Find jobs</button>
        </div>
      </div>
      <div style={{ padding: "40px" }}>
        {filteredJobs.length > 0 ? filteredJobs.map((job) => (
          <div key={job.id} className="job-card">
            <h4>{job.jobTitle}</h4>
            <p><strong>Company:</strong> {job.companyName}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Description:</strong> {job.jobDescription}</p>
            <p><strong>Skills:</strong> {job.skillsRequired}</p>
            <p><strong>Salary:</strong> {job.salaryRange}</p>
          </div>
        )) : <p style={{ textAlign: 'center', color: 'gray' }}>No jobs found for this search.</p>}
      </div>

      <div className='create-account'>
        {loggedInUser ? (
          <h1>Welcome back! <span>Explore jobs that match your profile.</span></h1>
        ) : (
          <>
            <h1>Create an account and <span>find the right job</span> for you.</h1>
            <Link to="/UserRegistration"><button>Create my account</button></Link>
          </>
        )}
      </div>
     <JobSearch/>
     <Footer/>
    </div>
  );
};

export default FindJobs;
