package com.jobportal.jobpostingdetails.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name="Job_Posting_Details")
public class JobPostingDetails {
	
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name="id")
	    private int id;
	    @Column(name="company_name")
	    @NotBlank(message="Company Name is required")
	    private String companyName;
	    @Column(name="job_title")
	    @NotBlank(message="Job title is required")
	    private String jobTitle;
	    @NotBlank(message="Location is required")
	    @Column(name="location")
	    private String location;
	    @Column(name="salary_range")
	    private String salaryRange;
	    @Column(name="skills_required")
	    private String skillsRequired;
	    @Column(name="educational_qualification")
	    private String educationalQualification;
	    @Column(name="number_of_openings")
	    private int numberOfOpenings;
	    @Column(name="application_deadline")
	    private String applicationDeadline; 
	    @Column(name="contact_info")
	    private String contactInfo;
	    @Column(name="company_website")
	    private String companyWebsite;
	    @Column(name="job_type")
	    @NotBlank(message="Job type is required")
	    private String jobType; 
	    @Column(name="experience_required")
	    @NotBlank(message="Experience is required")
	    private String experienceRequired;
	    @Column(name="job_description")
	    private String jobDescription;
	    
	    
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getCompanyName() {
			return companyName;
		}
		public void setCompanyName(String companyName) {
			this.companyName = companyName;
		}
		public String getJobTitle() {
			return jobTitle;
		}
		public void setJobTitle(String jobTitle) {
			this.jobTitle = jobTitle;
		}
		public String getLocation() {
			return location;
		}
		public void setLocation(String location) {
			this.location = location;
		}
		public String getSalaryRange() {
			return salaryRange;
		}
		public void setSalaryRange(String salaryRange) {
			this.salaryRange = salaryRange;
		}
		public String getSkillsRequired() {
			return skillsRequired;
		}
		public void setSkillsRequired(String skillsRequired) {
			this.skillsRequired = skillsRequired;
		}
		public String getEducationalQualification() {
			return educationalQualification;
		}
		public void setEducationalQualification(String educationalQualification) {
			this.educationalQualification = educationalQualification;
		}
		public int getNumberOfOpenings() {
			return numberOfOpenings;
		}
		public void setNumberOfOpenings(int numberOfOpenings) {
			this.numberOfOpenings = numberOfOpenings;
		}
		public String getApplicationDeadline() {
			return applicationDeadline;
		}
		public void setApplicationDeadline(String applicationDeadline) {
			this.applicationDeadline = applicationDeadline;
		}
		public String getContactInfo() {
			return contactInfo;
		}
		public void setContactInfo(String contactInfo) {
			this.contactInfo = contactInfo;
		}
		public String getCompanyWebsite() {
			return companyWebsite;
		}
		public void setCompanyWebsite(String companyWebsite) {
			this.companyWebsite = companyWebsite;
		}
		public String getJobType() {
			return jobType;
		}
		public void setJobType(String jobType) {
			this.jobType = jobType;
		}
		public String getExperienceRequired() {
			return experienceRequired;
		}
		public void setExperienceRequired(String experienceRequired) {
			this.experienceRequired = experienceRequired;
		}
		public String getJobDescription() {
			return jobDescription;
		}
		public void setJobDescription(String jobDescription) {
			this.jobDescription = jobDescription;
		}
		@Override
		public String toString() {
			return "JobPostingDetails [id=" + id + ", companyName=" + companyName + ", jobTitle=" + jobTitle
					+ ", location=" + location + ", salaryRange=" + salaryRange + ", skillsRequired=" + skillsRequired
					+ ", educationalQualification=" + educationalQualification + ", numberOfOpenings="
					+ numberOfOpenings + ", applicationDeadline=" + applicationDeadline + ", contactInfo=" + contactInfo
					+ ", companyWebsite=" + companyWebsite + ", jobType=" + jobType + ", experienceRequired="
					+ experienceRequired + ", jobDescription=" + jobDescription + "]";
		}
		

	    
	    
}
