import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EmployeesScheduleComponent } from './employees-schedule/employees-schedule.component';
import { CalendarDatesService } from './services/calendar-dates.service';
import { EmployeesService } from './services/employees.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    EmployeesScheduleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CalendarDatesService,
    EmployeesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
