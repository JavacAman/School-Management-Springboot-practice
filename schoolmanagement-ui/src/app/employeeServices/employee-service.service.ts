import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../employee/employee';

@Injectable()
export class EmployeeServiceService {
  private emaployeeUrl: string;

  constructor(private http: HttpClient) { 
    this.emaployeeUrl='http://localhost:8080/employee/login';
  }

  public getAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.emaployeeUrl+'/getAll');
  }
  public save(employee: Employee) {
    return this.http.post<Employee>(this.emaployeeUrl+'/employeeSave', employee);
  }
}
