import { Component, OnInit } from '@angular/core';
import {EmployeesService} from '../services/employees.service';

@Component({
  selector: 'app-employees-management',
  templateUrl: './employees-management.component.html',
  styleUrls: ['./employees-management.component.css']
})
export class EmployeesManagementComponent implements OnInit {

  constructor(private employeesService: EmployeesService) { }


  private employees;
  private employee;

  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.employeesService.getEmployees()
      .subscribe(data => {this.employees = data; console.log(data); });
  }

  removeEmployee(employeeId) {
    this.employeesService.removeEmployee(employeeId)
      .subscribe(data => {console.log(data);
                          this.getAllEmployees();
      });
    console.log('remove ' + employeeId);

  }

  getEmployee(employeeId) {
    this.employeesService.getEmployee(employeeId).subscribe(data => {this.employee = data; console.log(data); });
  }



}
