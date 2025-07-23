import Header from '../Components/Header';
import Footer from '../Components/Footer';

const AboutPage = () => {
  return (
    <div className="about-page">
     <Header />
      <section className="about-section">
        <h1>About Us</h1>
        <p className="tagline">Your Trusted Career Companion</p>
        <div className="about-content">
        <p>
           At <strong>Job Portal</strong>, we're passionate about helping individuals achieve their career goals and supporting companies in hiring top talent.
            Whether you are a fresher or an experienced professional, our platform is tailored to meet your job search needs.
        </p>
        <h3>Our Mission</h3>
          <p>To empower individuals and businesses by simplifying the job search and hiring process through technology, trust, and transparency.</p>
        <h3>What We Offer</h3>
          <ul>
            <li>Millions of Job Listings</li>
            <li>Easy & Quick Application Process</li>
            <li>Instant Job Alerts</li>
            <li>Career Guidance & Resources</li>
            <li>Trusted Company Profiles</li>
          </ul>
        <h3>Why Choose Us?</h3>
          <ul>
            <li>User-friendly interface</li>
            <li>Safe and secure login system</li>
            <li>Opportunities for both job seekers and employers</li>
            <li>Dedicated support team</li>
          </ul>
        <p className="closing-note">
            Discover your dream job or hire your next superstar – all in one place. Let’s build a better career future, together!
        </p>
        </div>
      </section>
    <Footer />
    </div>
  );
};
export default AboutPage