import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../Styling/TermsAndConditions.css';

const TermsAndConditions = () => {
  return (
    <div className="terms-page">
      <Header />
       <section className="terms-section">
        <h1>Terms & Conditions</h1>
        <p className="tagline">Please read these terms carefully before using our platform.</p>
        <div className="terms-content">
          <h3>1. Acceptance of Terms</h3>
          <p>By using the <strong>Job Portal</strong>, you agree to be bound by these terms and all applicable laws and regulations.</p>
          <h3>2. User Responsibilities</h3>
            <ul>
              <li>You must provide accurate and updated information.</li>
              <li>Do not misuse the platform for spam, fraud, or illegal activities.</li>
              <li>You are responsible for keeping your login credentials confidential.</li>
            </ul>
          <h3>3. Privacy Policy</h3>
          <p>
            Your data privacy is important to us. Please refer to our Privacy Policy for detailed information.
          </p>

          <h3>4. Intellectual Property</h3>
          <p>
            All content, logos, and branding used on this platform are the property of Job Portal and may not be reproduced without permission.
          </p>

          <h3>5. Termination</h3>
          <p>
            We reserve the right to terminate or suspend accounts that violate our terms or abuse the platform.
          </p>

          <h3>6. Changes to Terms</h3>
          <p>
            We may update these terms from time to time. Continued use of the service constitutes your acceptance of the changes.
          </p>

          <p className="closing-note">
            If you have any questions regarding these terms, please <a href="/contact">Contact Us</a>.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
