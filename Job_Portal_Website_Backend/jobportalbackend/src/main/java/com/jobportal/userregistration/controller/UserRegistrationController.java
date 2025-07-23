package com.jobportal.userregistration.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.jobportal.dto.UserSkilsDTO;
import com.jobportal.employeelogin.modle.EmployerRegistration;
import com.jobportal.jobpostingdetails.model.JobPostingDetails;
import com.jobportal.uploadresume.model.ResumeDetails;
import com.jobportal.userregistration.model.UserRegistration;
import com.jobportal.userregistration.service.UserRegistrationServiceImpl;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/userregistration")
@Validated
public class UserRegistrationController {

	@Autowired
	private UserRegistrationServiceImpl userRegistrationServiceImpl;

	@PostMapping("/saveuserinfo")
	public String saveUserInfo(@Valid @RequestBody UserRegistration userRegistration) throws Exception {
		userRegistrationServiceImpl.saveUserInfo(userRegistration);
		return "Data successfully saved";
	}
	
	@PostMapping("/saveemployeeinfo")
	public String saveEmployerInfo( @Valid @RequestBody EmployerRegistration employerRegistration) throws Exception {
      userRegistrationServiceImpl.saveEmployerInfo(employerRegistration);
		return " Employee data successfully saved";
	}
	
	@PostMapping("/uploadresume")
	public ResponseEntity<String> uploadResume(@RequestParam("file") MultipartFile file, @RequestParam("userName") String userName) {
		if(file.isEmpty()) {
			return ResponseEntity.badRequest().body("File is empty");
		}
		userRegistrationServiceImpl.uploadedResume(file,userName);
		return ResponseEntity.ok("Success");
	}

	@PostMapping("/savejobpostingdetails")
	public String saveJobPostingDetails(@RequestBody JobPostingDetails jobPostingDetails) throws Exception{
		 userRegistrationServiceImpl.saveJobPostingDetails(jobPostingDetails);
		    return "Job posting details saved successfully";
		
	}
	
	@GetMapping("/companywisejobs")
	public List<JobPostingDetails> getCompanyWiseJobs() {
	    return userRegistrationServiceImpl.getCompanyWiseJobDetails();
	}
	
	@GetMapping("/download/{userName}")
	public ResponseEntity<byte[]> downloadResume(@PathVariable String userName) {
		Optional<ResumeDetails> resumeDetails = userRegistrationServiceImpl.findByUserName(userName);

		if (resumeDetails.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		ResumeDetails resume = resumeDetails.get();

		return ResponseEntity.ok().contentType(MediaType.parseMediaType(resume.getFileType()))
				.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resume.getFileName() + "\"")
				.body(resume.getFileData());
	}
	
	@GetMapping("/userskilsdetails")
	public List<UserSkilsDTO> getUserSkilsDetails(){
		return userRegistrationServiceImpl.getUserSkilsDetails();
	}
	
	@GetMapping("/companydetails")
	public List<String> getCompanyDetails(){
		return userRegistrationServiceImpl.getCompanyDetails();
	}
	
	@GetMapping("/companydetails/{companyName}")
	public List<JobPostingDetails> getJobsByCompany(@PathVariable String companyName) {
	    return userRegistrationServiceImpl.getJobsByCompany(companyName);
	}
	
	@GetMapping("/alljobs")
	public List<JobPostingDetails> getAllJobs() {
	    return userRegistrationServiceImpl.getAllJobs();
	}
	
	
	@GetMapping("/search")
	public List<JobPostingDetails> searchJobs(@RequestParam(required = false) String title,@RequestParam(required = false) String location) {
	    return userRegistrationServiceImpl.searchJobs(title, location);
	}

}
