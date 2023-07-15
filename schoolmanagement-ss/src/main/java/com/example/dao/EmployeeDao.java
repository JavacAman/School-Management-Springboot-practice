package com.example.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.model.Employee;
import com.example.repository.EmployeeRepository;

@Component
public class EmployeeDao {
	
	@Autowired
	EmployeeRepository employeeRepo;
	
	//Save a login details
	public Employee saveEmp(Employee login) {
		return employeeRepo.save(login);
	}
	
	
	// Get login information by id
	public Optional<Employee> findOne(Integer id) {
		return employeeRepo.findById(id);
		
	}
	
	// Delete Login details
	
	public void deleteDetails(Employee logInfo) {
		employeeRepo.delete(logInfo);
	}
	
	public List<Employee> findAll() {
        List<Employee> seqs = (List<Employee>) employeeRepo.findAll();
        return seqs;
    }
	
	public List<Employee> findByName(String name) {
        List<Employee> listEmployee = employeeRepo.findUserDetailsByName(name);
        return listEmployee;
    }

}
