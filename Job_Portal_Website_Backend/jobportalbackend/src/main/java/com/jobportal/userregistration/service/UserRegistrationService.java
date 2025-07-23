package com.jobportal.userregistration.service;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.multipart.MultipartFile;

import com.jobportal.dto.UserSkilsDTO;
import com.jobportal.employeelogin.modle.EmployerRegistration;
import com.jobportal.jobpostingdetails.model.JobPostingDetails;
import com.jobportal.uploadresume.model.ResumeDetails;
import com.jobportal.userregistration.model.UserRegistration;


public interface UserRegistrationService {
	
	public void saveUserInfo(UserRegistration userRegistration) throws Exception;
	
	public void saveEmployerInfo(EmployerRegistration employerRegistration) throws Exception;
	
	public void saveJobPostingDetails(@RequestBody JobPostingDetails jobPostingDetails) throws Exception;

	List<JobPostingDetails> getCompanyWiseJobDetails();
	
	public void uploadedResume(MultipartFile file,String userName);
	
	public Optional<ResumeDetails> findByUserName(String userName);
	
	public List<UserSkilsDTO> getUserSkilsDetails();
	
	public List<String> getCompanyDetails();
	
	public List<JobPostingDetails> getJobsByCompany(String companyName);
	
	List<JobPostingDetails> getAllJobs();

	List<JobPostingDetails> searchJobs(String title, String location);

	

}
