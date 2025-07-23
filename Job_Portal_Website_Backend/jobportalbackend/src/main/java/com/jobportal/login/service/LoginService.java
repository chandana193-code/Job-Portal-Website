package com.jobportal.login.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobportal.employeelogin.modle.EmployerRegistration;
import com.jobportal.employerlogin.dao.EmployerLoginDao;
import com.jobportal.login.dao.LoginDao;
import com.jobportal.userregistration.model.UserRegistration;

@Service
public class LoginService {

	@Autowired
	private LoginDao loginDao;
	@Autowired
	private EmployerLoginDao employeeLoginDao;

	public String userLogin(String userName, String password) {
		return loginDao.countByUsernameOrEmailAndPassword(userName, userName, password);
	}

	public String employerLogin(String employeeName, String password) {
		return employeeLoginDao.countByUsernameAndPassword(employeeName, employeeName, password);

	}

	public String resetPassword(String emailId, String newPassword) {
		Optional<UserRegistration> userRegistration = loginDao.findByEmailId(emailId);
		if (userRegistration.isPresent()) {
			UserRegistration userinfo = userRegistration.get();
			userinfo.setEmailId(emailId);
			userinfo.setPassword(newPassword);
			loginDao.save(userinfo);
			return "Success";
		} else {
			return "User not found";
		}
	}
	
	public String employerResetPassword(String emailId, String newPassword) {
		Optional<EmployerRegistration> employerRegistration = employeeLoginDao.findByEmailId(emailId);
		
		if(employerRegistration.isPresent()) {
			EmployerRegistration employerResetInfo = employerRegistration.get();
			employerResetInfo.setEmailId(emailId);
			employerResetInfo.setPassword(newPassword);
			employeeLoginDao.save(employerResetInfo);
			return "Success";
		}else {
			return "Employer not found";
		}
		
	}

}
