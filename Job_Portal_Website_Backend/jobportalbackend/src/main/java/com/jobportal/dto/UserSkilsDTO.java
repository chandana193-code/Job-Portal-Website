package com.jobportal.dto;

public class UserSkilsDTO {
	
	private String userName;
	private String emailId;
	private String workStatus;
	
	public UserSkilsDTO(String userName, String emailId, String workStatus) {
		super();
		this.userName = userName;
		this.emailId = emailId;
		this.workStatus = workStatus;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getWorkstatus() {
		return workStatus;
	}

	public void setWorkstatus(String workStatus) {
		this.workStatus = workStatus;
	}

	
	
	
	
}
