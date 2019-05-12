import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employees } from '../interfaces/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private getEmployeesUrl = 'http://127.0.0.1:8081/employees';


  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employees[]> {
    this.http.head('Access-Control-Allow-Origin');
    return this.http.get<Employees[]>(this.getEmployeesUrl);
  }

  getEmployee(employeeId): Observable<Employees> {
    this.http.head('Access-Control-Allow-Origin');
    return this.http.get<Employees>(this.getEmployeesUrl + '/' + employeeId);
  }

  addEmployee(employee) {
    return this.http.post('http://127.0.0.1:8081/employees', employee);
  }

  removeEmployee(employeeId) {
    return this.http.delete('http://127.0.0.1:8081/employees' + '/' + employeeId);
  }




}

