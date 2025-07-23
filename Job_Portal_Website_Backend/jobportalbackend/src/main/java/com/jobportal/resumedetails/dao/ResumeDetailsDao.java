package com.jobportal.resumedetails.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jobportal.uploadresume.model.ResumeDetails;

@Repository
public interface ResumeDetailsDao extends JpaRepository<ResumeDetails, Integer>{

	public Optional<ResumeDetails> findByUserName(String userName);
}
