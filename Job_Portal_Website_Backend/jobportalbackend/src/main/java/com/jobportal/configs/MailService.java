package com.jobportal.configs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailService {

	@Autowired
	private JavaMailSender mailSender;

	public void sendPasswordResetEmail(String toEmail) {
		SimpleMailMessage message = new SimpleMailMessage();
		 message.setFrom("90f600001@smtp-brevo.com");
		message.setTo(toEmail);
		message.setSubject("Password Reset Request");
		message.setText("Click the link below to reset your password:\n\n");

		mailSender.send(message);
	}

}