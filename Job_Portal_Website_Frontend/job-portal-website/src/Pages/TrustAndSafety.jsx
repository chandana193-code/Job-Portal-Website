import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../Styling/TrustAndSafety.css';
import { Link } from 'react-router-dom';

const TrustAndSafety = () => {
  return (
    <div className="trust-safety-page">
      <Header />
       <section className="trust-section">
        <h1>Trust & Safety</h1>
        <p className="tagline">Your safety is our top priority.</p>
        <div className="trust-content">
          <h3>Our Commitment</h3>
          <p>
            At <strong>Job Portal</strong>, we are committed to maintaining a trusted and safe platform for both job seekers and employers. 
            We ensure transparency, authenticity, and a secure experience across our services.
          </p>

          <h3>Safety Measures We Take</h3>
          <ul>
            <li>Strict screening of employers and job listings</li>
            <li>Regular monitoring to detect suspicious activity</li>
            <li>Encryption of user data and credentials</li>
            <li>Privacy protection and data security policies</li>
          </ul>

          <h3>What You Can Do</h3>
          <ul>
            <li>Never share your login credentials or personal financial info</li>
            <li>Apply only to jobs listed under verified companies</li>
            <li>Use strong and unique passwords</li>
            <li>Report any suspicious job postings or behavior</li>
          </ul>

          <h3>Report Concerns</h3>
          <p>
            If you notice anything unusual or need assistance regarding safety, please reach out to us at:<br />
            <Link>supportteam@jobportal.com</Link><br />
             +91 9390441208
          </p>

          <p className="closing-note">
            Together, we can build a safer job search environment.
          </p>
        </div>
      </section>
    <Footer />
    </div>
  );
};

export default TrustAndSafety;
