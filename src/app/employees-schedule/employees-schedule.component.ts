import {Component, Input, OnInit} from '@angular/core';
import { CalendarDatesService } from '../services/calendar-dates.service';
import { EmployeesService } from '../services/employees.service';
import * as moment from 'moment';

@Component({
  selector: 'app-employees-schedule',
  templateUrl: './employees-schedule.component.html',
  styleUrls: ['./employees-schedule.component.css']
})
export class EmployeesScheduleComponent implements OnInit {
  calendarDaysArr: any;
  private currentMonth = moment().format('MM');
  private currentYear = moment().format('YYYY');

  // private monthName: string = moment.months()[Number(this.currentMonth) - 1];
  employees = [];
  @Input() x: null;
  @Input() y: null;
  constructor(private calendarDatesService: CalendarDatesService,
              private employeesService: EmployeesService) {
  }

  selectedField: string;
  contextMenu = false;
  employeeClass: number;
  dayClass: any;
  showOptions = false;

  // activates the menu with the coordinates
  onRightClick(event, dayIdx, empIdx) {
    this.x = event.clientX;
    this.y = event.clientY;
    this.contextMenu = true;
    this.selectedField = dayIdx + '-' + empIdx;
  }
  // disables the menu
  disableContextMenu() {
    this.contextMenu = false;
    this.showOptions = false;
    this.selectedField = null;
  }

  addShift() {
    console.log(this.showOptions);
    console.log('added');
    this.contextMenu = false;
    this.showOptions = false;
    this.showOptions = true;
  }


  ngOnInit() {
    this.calendarDaysArr = this.calendarDatesService.calendarDays(this.currentMonth, this.currentYear);
    this.employeesService.getEmployees()
      .subscribe(data => this.employees = data);
  }
}
