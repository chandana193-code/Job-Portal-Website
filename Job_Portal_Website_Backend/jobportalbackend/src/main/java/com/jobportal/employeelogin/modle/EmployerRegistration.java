package com.jobportal.employeelogin.modle;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name="EMPLOYER_REGISTRATION")
public class EmployerRegistration {
	@Id
	@Column(name = "ID")
	private int id;
	@Column(name = "USERNAME")
	@NotBlank(message="Username is required") 
	private String userName;
    @Column(name = "EMAILID")
	@Email(message="Enter a valid email")
	private String emailId;
    @Column(name = "PASSWORD")
	@Size(min=8, message="Password must be at least 8 characters")
	private String password;
	@Column(name = "MOBILENUMBER")
	private long mobileNumber;
	@Column(name = "COMPANYNAME")
	@NotBlank(message = "companyname is required")
	private String companyName;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public long getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(long mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	@Override
	public String toString() {
		return "EmployerRegistration [id=" + id + ", userName=" + userName + ", emailId=" + emailId + ", password="
				+ password + ", mobileNumber=" + mobileNumber + ", companyName=" + companyName + "]";
	}

	

}
