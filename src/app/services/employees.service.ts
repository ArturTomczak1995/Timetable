import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employees } from '../interfaces/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private getEmployeesUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employees[]> {
    return this.http.get<Employees[]>(this.getEmployeesUrl);
  }
}

