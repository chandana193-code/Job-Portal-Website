package com.jobportal.login.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.jobportal.userregistration.model.UserRegistration;


@Repository
public interface LoginDao extends JpaRepository<UserRegistration, Integer>{
	
	@Query(value = "SELECT username FROM user_registration WHERE (username = :username OR emailid = :emailid) AND password = :password", nativeQuery = true)
    String countByUsernameOrEmailAndPassword(
        @Param("username") String username,
        @Param("emailid") String emailid,
        @Param("password") String password
    );

	Optional<UserRegistration> findByEmailId(String emailId);
	

	
}
