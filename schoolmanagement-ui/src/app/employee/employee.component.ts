import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeServiceService } from '../employeeServices/employee-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeServiceService) { 
    
  }

  ngOnInit() {
    this.employeeService.getAllEmployees().subscribe(data =>{
      this.employees = data;
    })
  }

}
