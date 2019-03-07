import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';

import { CalendarDatesService } from '../services/calendar-dates.service';
import { EmployeesService } from '../services/employees.service';
import { Shifts } from '../shifts';
import { Leaves } from '../leaves';

@Component({
  selector: 'app-employees-schedule',
  templateUrl: './employees-schedule.component.html',
  styleUrls: ['./employees-schedule.component.css']
})
export class EmployeesScheduleComponent implements OnInit {
  private currentMonth = moment().format('MM');
  private currentYear = moment().format('YYYY');
  shiftStart = '06:00';
  shiftEnd = '18:00';

  calendarDaysArr: any;
  selectedField: string;
  contextMenu = false;
  employeeClass: number;
  showOptions = false;
  employees = [];
  dayClass: any;
  leaveOptionsContext = false;

  x: null;
  y: null;

  constructor(private calendarDatesService: CalendarDatesService,
              private employeesService: EmployeesService
              ) {
  }

  shiftModel = new Shifts(1, '06:00', '18:00', null);
  leaveModel = new Leaves();

  onRightClick(event, dayIdx, empIdx) {
    const selectedDate = this.calendarDaysArr[dayIdx].i + '-' + this.currentMonth + '-' + this.currentYear;
    const dateTimestamp = moment(selectedDate, 'DD-MM-YYYY').valueOf();
    this.x = event.clientX;
    this.y = event.clientY;
    this.contextMenu = true;
    this.shiftModel.id = empIdx;
    this.shiftModel.date = dateTimestamp;
    this.selectedField = dayIdx + '-' + empIdx;
  }

  disableContextMenu() {
    this.contextMenu = false;
    this.showOptions = false;
    this.selectedField = null;
  }

  showShiftWindow() {
    this.contextMenu = false;
    this.showOptions = false;
    this.showOptions = true;
  }

  addShift(even) {
    event.preventDefault();
    this.disableContextMenu();
    console.log(even.shiftStart);
  }


  ngOnInit() {
    this.calendarDaysArr = this.calendarDatesService.calendarDays(this.currentMonth, this.currentYear);
    this.employeesService.getEmployees()
      .subscribe(data => this.employees = data);
  }
}
