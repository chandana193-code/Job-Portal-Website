import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import JobSearch from '../Components/JobSearch';

function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState('');
  const [companyJobs, setCompanyJobs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9090/userregistration/companydetails")
      .then((res) => setCompanies(res.data))
      .catch((err) => console.error("Error fetching companies:", err));
  }, []);

  const handleCompanyChange = (companyName) => {
    setSelectedCompany(companyName);
    axios.get(`http://localhost:9090/userregistration/companydetails/${companyName}`)
      .then((res) => setCompanyJobs(res.data))
      .catch((err) => console.error("Error fetching jobs:", err));
  };

  return (
    <div className="company-list">
     <Header />
       <h2>Explore Top Companies</h2>
       <div className="dropdown-wrapper">
       <select onChange={(e) => handleCompanyChange(e.target.value)} defaultValue="">
       <option value="" disabled>Select a company</option>
       {companies.map((company, index) => (
       <option key={index} value={company}>
        {company}
       </option>
       ))}
       </select>
       </div>

       {selectedCompany && (
        <div className="company-details">
          <h3>Jobs at {selectedCompany}</h3>
           {companyJobs.length > 0 ? companyJobs.map(job => (
            <div key={job.id} className="job-card">
              <h4>{job.jobTitle} at {job.companyName}</h4>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Experience:</strong> {job.experienceRequired}</p>
              <p><strong>Salary:</strong> {job.salaryRange}</p>
              <p><strong>Skills Required:</strong> {job.skillsRequired}</p>
              <p><strong>Qualification:</strong> {job.educationalQualification}</p>
              <p><strong>Openings:</strong> {job.numberOfOpenings}</p>
              <p><strong>Deadline:</strong> {job.applicationDeadline}</p>
              <p><strong>Contact:</strong> {job.contactInfo}</p>
              <p><strong>Website:</strong> <a href={job.companyWebsite} target="_blank" rel="noopener noreferrer">{job.companyWebsite}</a></p>
              <p><strong>Description:</strong> {job.jobDescription}</p>
            </div>
           )) : <p>No job listings available.</p>}
        </div>
      )}
      <JobSearch />
      <Footer />
    </div>
  );
}

export default CompanyList;
