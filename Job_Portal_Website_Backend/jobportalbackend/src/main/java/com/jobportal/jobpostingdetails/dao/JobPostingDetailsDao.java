package com.jobportal.jobpostingdetails.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.jobportal.jobpostingdetails.model.JobPostingDetails;

@Repository
public interface JobPostingDetailsDao extends JpaRepository<JobPostingDetails, Integer>{
	@Query("SELECT j FROM JobPostingDetails j GROUP BY j.companyName")
    List<JobPostingDetails> findCompanyWiseDetails();
	
	List<JobPostingDetails> findByCompanyName(String companyName);
	
	List<JobPostingDetails> findAll();

	List<JobPostingDetails> findByJobTitleContainingIgnoreCaseAndLocationContainingIgnoreCase(String title,String location);

}
