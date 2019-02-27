import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EmployeesScheduleComponent } from './employees-schedule/employees-schedule.component';
import { CalendarDatesService } from './services/calendar-dates.service';


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    EmployeesScheduleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CalendarDatesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
