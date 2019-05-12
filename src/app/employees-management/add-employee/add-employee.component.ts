import { Component, OnInit } from '@angular/core';
import {EmployeeModule} from '../employee/employee.module';
import {EmployeesService} from '../../services/employees.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private employeesService: EmployeesService, private location: Location) { }

  private employeeModel = new EmployeeModule('', '', '');

  ngOnInit() {
  }

  addEmployee(employee) {
    this.employeesService.addEmployee(employee)
      .subscribe(data => {console.log(data);
                          this.backClicked();
      });

  }
  backClicked() {
    this.location.back();
  }
}
