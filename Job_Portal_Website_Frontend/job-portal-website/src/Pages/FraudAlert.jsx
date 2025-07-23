import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../Styling/FraudAlert.css';
import { Link } from 'react-router-dom';

const FraudAlert = () => {
  return (
    <div className="fraud-alert-page">
      <Header />
       <section className="fraud-section">
        <h1>Fraud Alert</h1>
        <p className="tagline">Stay alert. Stay safe from fraudulent job offers.</p>
         <div className="fraud-content">
          <h3>Beware of Fake Job Offers</h3>
            <p>
              <strong>Job Portal</strong> never asks job seekers to pay money for job applications, interviews, or placements.
              We strongly advise you to be cautious of fake job offers promising guaranteed jobs in return for money.
            </p>

          <h3>How to Identify Fraudulent Activity?</h3>
            <ul>
              <li>Unsolicited job offers or interview calls from unknown sources</li>
              <li>Requests for payment for job processing or application</li>
              <li>Emails from unofficial domains (e.g., Gmail, Yahoo, not company domains)</li>
              <li>Poor grammar or unrealistic salary/package claims</li>
            </ul>
          <h3>What You Should Do</h3>
            <ul>
              <li>Do not make any payments or share personal information</li>
              <li>Verify job openings through official websites or authorized sources</li>
              <li>Report suspicious activities to our support team</li>
            </ul>
          <h3>Report Fraud</h3>
          <p>
            If you suspect any fraudulent activity, please contact us at:
            <br />
            <Link>supportteam@jobportal.com</Link><br />
             +91 9390441208
          </p>

          <p className="closing-note">
            Your safety is our top priority. Stay alert and protect your career.
          </p>
        </div>
      </section>
     <Footer />
    </div>
  );
};

export default FraudAlert;
