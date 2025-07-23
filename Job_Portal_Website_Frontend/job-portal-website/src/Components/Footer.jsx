import {Link} from 'react-router-dom';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import '../Styling/Footer.css';
const Footer = () => {
  return (
  <div className='footerSection'>
       <div className="footer-section">
          <div>
            <h3>Job portal contact details </h3>
            <p>Connect with us :</p>
            <div className="whatsApp">
               <FaWhatsapp className="text-whatsApp" />
               <span>  +91 9390441208</span>
            </div>
            <div className="email">
              <FaEnvelope className="text-email" />
              <span>supportteam@jobportal.com</span>
            </div>
          </div>
            <ul>
                <li><Link to="/aboutUs"><button>About Us</button></Link></li>
                <li><Link to="/contact"><button>Contact Us</button></Link></li>
                <li><Link to="/helpCenter"><button>Help center</button></Link></li>
            </ul>
            <ul>
                <li><Link to="/termsAndConditions"><button>Terms & conditions</button></Link></li>
                <li><Link to="/fraudAlert"><button>Fraud alert</button></Link></li>
                <li><Link to="/trustAndSafety"><button>Trust & safety</button></Link></li>
            </ul>

          </div>

          <div className='text'>
           <p>&copy; 2025 Job Portal. All rights reserved.</p>
          </div>
       </div>
    )
}

export default Footer