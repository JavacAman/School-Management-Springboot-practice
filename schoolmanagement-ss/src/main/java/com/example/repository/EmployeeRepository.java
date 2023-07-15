package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.model.Employee;


@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

	//LoginInfo findOne(Long id);

    @Query("SELECT s FROM Employee s where s.fname = :name")
    public List<Employee> findUserDetailsByName(String name);
	
//	@Query("SELECT s from LoginInfo")
//	public List<LoginInfo> findAllUsers();

	
}
