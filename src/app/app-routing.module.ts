import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainViewComponent} from './main-view/main-view.component';
import {EmployeesManagementComponent} from './employees-management/employees-management.component';
import {AddEditComponent } from './employees-management/add-edit/add-edit.component';



const routes: Routes = [
  {path: '', component: MainViewComponent},
  {path: 'employees', component: EmployeesManagementComponent},
  {path: 'employees/add', component: AddEditComponent},
  {path: 'employees/edit/:id', component: AddEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ EmployeesManagementComponent, AddEditComponent ];
