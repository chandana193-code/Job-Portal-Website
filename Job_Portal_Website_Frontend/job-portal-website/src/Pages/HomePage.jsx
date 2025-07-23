import { useEffect, useState } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import JobSearch from '../Components/JobSearch';
import EmployerDashbord from './EmployerDashbord';

const HomePage = () => {
  const [isEmployee, setIsEmployee] = useState(false);

  useEffect(() => {
    const employeeLoggedIn = localStorage.getItem("employeeLoggedIn") === "true";
    setIsEmployee(employeeLoggedIn);
  }, []); 

  return (
    <div className='main-container'>
      <Header />
      <section className="welcome-section">
        <div className="overlay"></div>
        <div className="welcome-content">
          <h1>Welcome to Job Portal</h1>
          <p className="intro">
            {isEmployee ? "Post and Manage Jobs Easily!" : "Your Gateway to Career Success!"}
          </p>
          <p className="description">
             {isEmployee
              ? "As an employer, you can post new job openings, manage applications, and view talent insights."
              : (
                <>
                "Whether you're a fresher or an experienced professional, our platform is designed to help you find your dream job."
                <p className="closing">
                Let us help you take the next step in your career journey!
                </p>
                </>
                )}
            </p>
          
        </div>
      </section>
      {isEmployee?<EmployerDashbord/>:(
        <>
        <section className="why-choose-us">
          <h2>Why Choose Our Job Portal?</h2>
          <ul>
          <li>Easy and Fast Job Applications</li>
          <li>Verified Companies and Job Listings</li>
          <li>Resume Storage and Track Your Applications</li>
          </ul>
        </section>
        <section className="how-it-works">
          <h2>How It Works</h2>
            <div className="steps">
             <div className="step">
              <h3>1. Register</h3>
              <p>Create your free job portal account.</p>
             </div>
             <div className="step">
              <h3>2. Upload Resume</h3>
              <p>Let employers find you based on your skills.</p>
             </div>
             <div className="step">
              <h3>3. Apply Jobs</h3>
              <p>Apply to multiple jobs with just one click.</p>
             </div>
            </div>
        </section>
        <>
        <section className="success-stories">
          <h2>Success Stories</h2>
          <p>“I found my first job within 2 weeks through this portal!” - <i>Ravi Kumar, Frontend Developer</i></p>
          <p>“Best job site for freshers. Easy to use and fast responses.” - <i>Meena Jain, Java Developer</i></p>
        </section>
      </>
      <JobSearch/>
      </>)}
    <Footer />
    </div>
  )
}

export default HomePage;