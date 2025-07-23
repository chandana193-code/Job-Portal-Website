package com.jobportal.empolyeelogin.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jobportal.employeelogin.modle.EmployerRegistration;

@Repository
public interface EmployeeLoginDao extends JpaRepository<EmployerRegistration, Integer>{

}
