import { Component, OnInit } from '@angular/core';
import { CalendarDatesService } from '../services/calendar-dates.service';
import { EmployeesService } from '../services/employees.service';
import * as moment from 'moment';

@Component({
  selector: 'app-employees-schedule',
  templateUrl: './employees-schedule.component.html',
  styleUrls: ['./employees-schedule.component.css']
})
export class EmployeesScheduleComponent implements OnInit {
  private calednarDaysArr: any;
  private currentMonth = moment().format('MM');
  private currentYear = moment().format('YYYY');
  private monthName: string = moment.months()[Number(this.currentMonth) - 1];
  private employees = [];
  constructor(private calendarDatesService: CalendarDatesService,
              private employeesService: EmployeesService) {
  }

  ngOnInit() {
    this.calednarDaysArr = this.calendarDatesService.calendarDays(this.currentMonth, this.currentYear);
    this.employeesService.getEmployees()
      .subscribe(data => this.employees = data);
  }

}
