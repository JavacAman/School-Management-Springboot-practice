import { Component, OnInit, NgModule } from '@angular/core';
import { Employee } from '../employee/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmployeeServiceService } from '../employeeServices/employee-service.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employees: Employee;
  

  constructor( private route: ActivatedRoute, private router: Router, private employeeService:EmployeeServiceService) { 
    this.employees = new Employee;
  }

  onSubmit(){
    this.employeeService.save(this.employees).subscribe(result => this.gotoEmployeeList());
  }

  gotoEmployeeList(){
    this.router.navigate(['/employee']);
  }
  
  ngOnInit(): void {
  }

}
