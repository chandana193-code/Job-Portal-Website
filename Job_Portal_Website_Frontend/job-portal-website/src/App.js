import './App.css';
import FindJobs from './Pages/FindJobs';
import ForgotPassword from './Pages/ForgotPassword';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import UserRegistration from './Pages/UserRegistration';
import Contact from './Pages/Contact';
import JobPostForm from './Pages/JobPostForm';
import AboutPage from './Pages/AboutPage';
import HelpCenter from './Pages/HelpCenter';
import EmployerDashbord from './Pages/EmployerDashbord';
import CompanyList from './Pages/CompanyList';
import TermsAndConditions from './Pages/TermsAndConditions';
import FraudAlert from './Pages/FraudAlert';
import TrustAndSafety from './Pages/TrustAndSafety';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginpage" element={<LoginPage title="Login"/>}/>
        <Route path="/employee-login" element={<LoginPage title="Employee Login"/>}/>
        <Route path="userRegistration" element={<UserRegistration title='Create your Job Portal Profile'/>}/>
        <Route path="employeeRegistration" element={<UserRegistration title='Create your Employee Profile'/>}/>
        <Route path="/forgotPassword" element={<ForgotPassword/>}/>
        <Route path="/employee-forgotpassword" element={<ForgotPassword />} />
        <Route path="/findJobs" element={<FindJobs/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/jobPostForm" element={<JobPostForm/>}/>
        <Route path="/aboutUs" element={<AboutPage/>}/>
        <Route path="/helpCenter" element={<HelpCenter/>}/>
        <Route path="/fraudAlert" element={<FraudAlert/>}/>
        <Route path="/termsAndConditions" element={<TermsAndConditions/>}/>
        <Route path="/trustAndSafety" element={<TrustAndSafety/>}/>
        <Route path="" element={<EmployerDashbord/>}/>
        <Route path="/companies" element={<CompanyList />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
