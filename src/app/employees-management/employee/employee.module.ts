import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule {

  constructor(
    public name: string,
    public surname: string,
    public phone: string
  ) {}

}
