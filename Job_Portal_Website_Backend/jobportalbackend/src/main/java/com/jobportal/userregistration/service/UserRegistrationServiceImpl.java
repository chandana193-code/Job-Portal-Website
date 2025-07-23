package com.jobportal.userregistration.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.jobportal.dto.UserSkilsDTO;
import com.jobportal.employeelogin.modle.EmployerRegistration;
import com.jobportal.employerlogin.dao.EmployerLoginDao;
import com.jobportal.jobpostingdetails.dao.JobPostingDetailsDao;
import com.jobportal.jobpostingdetails.model.JobPostingDetails;
import com.jobportal.resumedetails.dao.ResumeDetailsDao;
import com.jobportal.uploadresume.model.ResumeDetails;
import com.jobportal.userregistration.dao.UserRegistrationDao;
import com.jobportal.userregistration.model.UserRegistration;

@Service
public class UserRegistrationServiceImpl implements UserRegistrationService {

	@Autowired
	private UserRegistrationDao userRegistrationDao;

	@Autowired
	private EmployerLoginDao employeeLoginDao;
	
	@Autowired
	private JobPostingDetailsDao jobPostingDetailsDao;
	
	@Autowired
	private ResumeDetailsDao resumeDetailsDao;
	

	@Override
	public void saveUserInfo(UserRegistration userRegistration) throws Exception {
		List<UserRegistration> usersList = userRegistrationDao.findAll();
		for (UserRegistration userdata : usersList) {
			if (userdata.getUserName().equalsIgnoreCase(userRegistration.getUserName())) {
				throw new Exception("User name already existing");
			} else if (userdata.getEmailId().equalsIgnoreCase(userRegistration.getEmailId())) {
				throw new Exception("User email id already existing");
			}
		}
		userRegistrationDao.save(userRegistration);
	}

	@Override
	public void saveEmployerInfo(EmployerRegistration employerRegistration) throws Exception {
		List<EmployerRegistration> employerList = employeeLoginDao.findAll();
		for(EmployerRegistration employerData : employerList) {
			if(employerData.getUserName().equalsIgnoreCase(employerRegistration.getUserName())) {
				throw new Exception("Employer name already existing");
			}else if (employerData.getEmailId().equalsIgnoreCase(employerRegistration.getEmailId())) {
				throw new Exception("Employer email id already existing");
			}
		}
		employeeLoginDao.save(employerRegistration);
		
	}
	
	@Override
	public void saveJobPostingDetails(JobPostingDetails jobPostingDetails) throws Exception{
		jobPostingDetailsDao.save(jobPostingDetails);
		
	}
	
	@Override
	public List<JobPostingDetails> getCompanyWiseJobDetails() {
	    return jobPostingDetailsDao.findCompanyWiseDetails(); 
	}
	
	@Override
	public void uploadedResume(MultipartFile file,String userName) {
		Optional<ResumeDetails> optionalResume = resumeDetailsDao.findByUserName(userName);
		ResumeDetails resumeDetails =optionalResume.orElse(new ResumeDetails());
		try {
			resumeDetails.setUserName(userName);
			resumeDetails.setFileName(file.getOriginalFilename());
			resumeDetails.setFileType(file.getContentType());
			resumeDetails.setFileData(file.getBytes());
			resumeDetailsDao.save(resumeDetails);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@Override
	public Optional<ResumeDetails> findByUserName(String userName){
		Optional<ResumeDetails> optionalResume = resumeDetailsDao.findByUserName(userName);
		return optionalResume;
	}

	@Override
	public List<UserSkilsDTO> getUserSkilsDetails() {
		return userRegistrationDao.getUserDetails();
	}
	
	@Override
	public List<String> getCompanyDetails(){
		return userRegistrationDao.getCompanyDetails();
	}
	
	public List<JobPostingDetails> getJobsByCompany(String companyName) {
	    return jobPostingDetailsDao.findByCompanyName(companyName);
	}
	
	@Override
	public List<JobPostingDetails> getAllJobs() {
	    return jobPostingDetailsDao.findAll();
	}
	
	@Override
	public List<JobPostingDetails> searchJobs(String title, String location) {
	    return jobPostingDetailsDao.findByJobTitleContainingIgnoreCaseAndLocationContainingIgnoreCase(title, location);
	}

	
}
