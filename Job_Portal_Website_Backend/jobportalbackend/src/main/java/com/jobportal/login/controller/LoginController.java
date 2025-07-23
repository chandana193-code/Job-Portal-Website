package com.jobportal.login.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jobportal.configs.MailService;
import com.jobportal.login.service.LoginService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/login")
@Validated
public class LoginController {
	
	@Autowired
	private LoginService loginService;
	@Autowired
	private MailService mailService;
	
	@PostMapping("/userlogin")
	public String userLogin(@Valid @RequestParam String userName, @RequestParam String password) {
		return loginService.userLogin(userName, password);
	}
	
	@PostMapping("/employerLogin")
	public String employerLogin(@Valid @RequestParam String employeeName, String password) {
		return loginService.employerLogin(employeeName, password);
	}
	
	@GetMapping("/sendemail")
	public String sendMail() {
		mailService.sendPasswordResetEmail("nallachandana193@gmail.com");
		return "Success";
	}
	
	@PostMapping("/userresetpassword")
	public ResponseEntity<String> userResetPassword(@RequestParam String emailId,@RequestParam String newPassword){
		 String response = loginService.resetPassword(emailId, newPassword);
		    return ResponseEntity.ok(response);
		
	}

	@PostMapping("/employerresetpassword")
	public ResponseEntity<String> employerResetPassword(@RequestParam String emailId, @RequestParam String newPassword){
		   String response = loginService.employerResetPassword(emailId, newPassword);
		   return ResponseEntity.ok(response);
	}

}
