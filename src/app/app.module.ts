import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EmployeesScheduleComponent } from './employees-schedule/employees-schedule.component';
import { CalendarDatesService } from './services/calendar-dates.service';
import { EmployeesService } from './services/employees.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { ContextMenuSettingsService } from './services/context-menu-settings.service';
import { NavbarComponent } from './navbar/navbar.component';
import { MainViewComponent } from './main-view/main-view.component';
import { EmployeesManagementComponent } from './employees-management/employees-management.component';
import { AddEditComponent } from './employees-management/add-edit/add-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    EmployeesScheduleComponent,
    ContextMenuComponent,
    NavbarComponent,
    routingComponents,
    MainViewComponent,
    EmployeesManagementComponent,
    AddEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    CalendarDatesService,
    EmployeesService,
    ContextMenuSettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
