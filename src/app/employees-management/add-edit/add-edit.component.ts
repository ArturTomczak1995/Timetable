import { Component, OnInit } from '@angular/core';
import {EmployeesService} from '../../services/employees.service';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {EmployeeModule} from '../employee/employee.module';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  constructor(private employeesService: EmployeesService,
              private location: Location,
              private route: ActivatedRoute,
  ) { }

  private employeeModel = new EmployeeModule('', '', '');
  private employeeId: number;
  private edition = false;

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('in');
      if (params.edit) {
        console.log('true');
        this.edition = true;
        this.setEmployeeData();
      }});
  }

  setEmployeeData() {
    this.route.params
      .subscribe(params => { this.employeeId = params.id;
                             this.getEmployee();
      });
    this.employeeModel.setId(this.employeeId);
  }

  addEmployee(employee) {
    this.employeesService.addEmployee(employee)
      .subscribe(data => {console.log(data);
                          this.backClicked();
      });
    this.route.params
      .subscribe(params => { this.employeeId = params.id;
                             this.getEmployee();
      });
    this.employeeModel.setId(this.employeeId);
  }

  backClicked() {
    this.location.back();
  }

  getEmployee() {
    this.employeesService.getEmployee(this.employeeId)
      .subscribe(data => {console.log(data);
                          for (const key in data) {
          if (key in this.employeeModel) {
            this.employeeModel[key] = data[key];
          }
        }
      });
  }

  editEmployee(employee) {
    console.log(employee);
    this.employeesService.editEmployee(employee)
      .subscribe(data => {console.log(data);
                          this.backClicked();
      });
  }
}
