import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isEmployeeLoggedIn, setIsEmployeeLoggedIn] = useState(false);
  const [employeeName, setEmployeeName] = useState(null);
 
  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
    setIsEmployeeLoggedIn(localStorage.getItem("employeeLoggedIn") === "true");
    setEmployeeName(localStorage.getItem("employeeName")); 
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/employee-login");
    window.location.reload();
  };

  return (
    <header className="header">
      <div className="left-part">
        <span>Job Portal</span>
      </div>
       <nav className="nav-links">
        {isEmployeeLoggedIn ?(
          <ul><li><Link to="/"><button>Home</button></Link></li></ul>):
          (
            <ul>
                <li><Link to="/"><button>Home</button></Link></li>
                <li><Link to="/findJobs"><button>Find Jobs</button></Link></li>
                <li className="dropdown">
                <Link to="/companies"><button className="dropbtn">Companies</button> </Link>
                </li>
                <li><Link to="/contact"><button>Contact Us</button></Link></li>
            </ul>
          )
          }
       </nav>
       <div className="right-part">
        <ul>
          {(loggedInUser || isEmployeeLoggedIn) && (
            <>
              <li>
              <span className='welcome'>Welcome, {loggedInUser || employeeName}</span>
              </li>
              <li><button className='logout' onClick={handleLogout}>Logout</button></li>
            </>
          )}
         
          {!loggedInUser && !isEmployeeLoggedIn && (
            <>
              <li><Link to="/loginpage"><button className='login'>Login</button></Link></li>
              <li><Link to="/employee-login"><button className='employee-login'>Employee Login</button></Link></li>
            </>
          )}

          {isEmployeeLoggedIn && (
            <li><Link to="/JobPostForm"><button className='post-job'>Post a job</button></Link></li>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
