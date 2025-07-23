package com.jobportal.employerlogin.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.jobportal.employeelogin.modle.EmployerRegistration;

@Repository
public interface EmployerLoginDao extends JpaRepository<EmployerRegistration, Integer> {
	@Query(value = "SELECT username FROM EMPLOYER_REGISTRATION WHERE (username = :username OR emailid = :emailid) AND password = :password", nativeQuery = true)
	String countByUsernameAndPassword(
			@Param("username") String username, @Param("emailid") String emailid, @Param("password") String password);
	
	Optional<EmployerRegistration> findByEmailId(String emailId);

}
