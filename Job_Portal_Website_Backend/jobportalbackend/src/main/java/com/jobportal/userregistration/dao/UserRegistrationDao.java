package com.jobportal.userregistration.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.jobportal.dto.UserSkilsDTO;
import com.jobportal.userregistration.model.UserRegistration;

@Repository
public interface UserRegistrationDao extends JpaRepository<UserRegistration, Integer> {

	@Query(value = "select user.username as userName,user.emailid as emailId,user.workstatus as workStatus from user_registration user inner join user_resume_details urd on user.username = urd.user_name", nativeQuery = true)
	List<UserSkilsDTO> getUserDetails();

	@Query(value = "select distinct company_name FROM job_portal_database.job_posting_details", nativeQuery = true)
	List<String> getCompanyDetails();
	
}
