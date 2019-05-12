import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainViewComponent} from './main-view/main-view.component';
import {AddEmployeeComponent} from './employees-management/add-employee/add-employee.component';
import {EmployeesManagementComponent} from './employees-management/employees-management.component';


const routes: Routes = [
  {path: '', component: MainViewComponent},
  {path: 'employees', component: EmployeesManagementComponent},
  {path: 'employees/add', component: AddEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ EmployeesManagementComponent ];
