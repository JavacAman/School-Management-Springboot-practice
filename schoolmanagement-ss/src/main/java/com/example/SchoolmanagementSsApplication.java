package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.example.controller.EmployeeController;


@SpringBootApplication
@EnableJpaRepositories
public class SchoolmanagementSsApplication {

	public static void main(String[] args) {
		SpringApplication.run(SchoolmanagementSsApplication.class, args);
	}
	
	
}
