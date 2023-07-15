package com.example.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dao.EmployeeDao;
import com.example.model.Employee;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/employee/login")
public class EmployeeController {

	
	
	@Autowired
	private EmployeeDao employeeDao;
	
	
	@GetMapping("/test")
	public String testingAPI() {
		return "This is Ashutosh";
	}
	
	
	// to get all login info
	
	@GetMapping("/getAll")
	public List<Employee> getLoginInfo() {
		return employeeDao.findAll();
	}
	
	
	@RequestMapping("/getInfo/{id}")
	public Optional<Employee> getEmployeeById(@PathVariable("id") int id){
		return employeeDao.findOne(id);
	}
	
	@RequestMapping("/getName/{name}")
	public List<Employee> getEmployeeByName(@PathVariable("name") String name) {
		return employeeDao.findByName(name);
	}
	
	@PostMapping("/saveEmployee")
	public void addEmployee(@RequestBody Employee employee) {
		employeeDao.saveEmp(employee);
	}
	
	
}