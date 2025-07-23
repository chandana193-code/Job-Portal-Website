import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../Styling/HelpCenter.css';
import { Link } from 'react-router-dom';

const HelpCenter = () => {
  const faqs = [
    {
      question: "How do I create an account?",
      answer: "Click on 'Sign Up' at the top right corner, fill in your details, and verify your email address to complete registration."
    },
    {
      question: "How can I apply for jobs?",
      answer: "Search for jobs using keywords or filters, click on a job posting, and hit the 'Apply Now' button to submit your application."
    },
    {
      question: "How do I reset my password?",
      answer: "Click 'Forgot Password' on the login page, enter your registered email, and follow the instructions sent to your inbox."
    },
    {
      question: "Can I edit my application after submitting?",
      answer: "Applications can be edited within 24 hours of submission. After that, you'll need to withdraw and resubmit."
    },
    {
      question: "How do I delete my account?",
      answer: "Go to Account Settings > Privacy > Delete Account. Note this action is irreversible."
    }
  ];
 
  return (
    <div className="help-center">
      <Header />
       <main className="help-container">
        <section className="hero-section">
          <h1>How can we help you?</h1>
        </section>
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={index}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="contact-section">
          <h2>Still need help?</h2>
            <div className="contact-card">
            <Link to="/contact"><button>Contact Us</button></Link>
            </div>
        </section>
       </main>
      <Footer />
    </div>
  );
};

export default HelpCenter;