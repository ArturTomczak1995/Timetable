import {Component, OnInit, Input} from '@angular/core';
import * as moment from 'moment';

import {CalendarDatesService} from '../services/calendar-dates.service';
import {EmployeesService} from '../services/employees.service';
import {Shifts} from '../shifts';
import {Leaves} from '../leaves';

@Component({
  selector: 'app-employees-schedule',
  templateUrl: './employees-schedule.component.html',
  styleUrls: ['./employees-schedule.component.css']
})
export class EmployeesScheduleComponent implements OnInit {

  constructor(private calendarDatesService: CalendarDatesService,
              private employeesService: EmployeesService
  ) { }

  private currentMonth = moment().format('MM');
  private currentYear = moment().format('YYYY');
  shiftStart = '06:00';
  shiftEnd = '18:00';

  x: null;
  y: null;
  calendarDaysArr: any;
  selectedField: string;
  contextMenu = false;
  employeeClass: number;
  showOptions = false;
  employees = [];
  dayClass: any;
  leaveOptionsContext = false;

  selectedCells = false;
  @Input() cmWidth: number;

  minDayIdx: number;
  minEmpIdx: number;
  maxDayIdx: number;
  maxEmpIdx: number;
  buforEmpIdx: number;
  buforDayIdx: number;

  shiftModel = new Shifts(1, '06:00', '18:00', null);
  leaveModel = new Leaves();

  ngOnInit() {
    this.calendarDaysArr = this.calendarDatesService.calendarDays(this.currentMonth, this.currentYear);
    this.employeesService.getEmployees()
      .subscribe(data => this.employees = data);
  }



  onRightClick(event, dayIdx, empIdx) {
    const selectedDate = this.calendarDaysArr[dayIdx].i + '-' + this.currentMonth + '-' + this.currentYear;
    const dateTimestamp = moment(selectedDate, 'DD-MM-YYYY').valueOf();
    this.disableContextMenu();
    this.x = event.clientX;
    this.y = event.clientY;
    this.contextMenu = true;
    this.shiftModel.id = empIdx;
    this.shiftModel.date = dateTimestamp;
    this.selectedField = dayIdx + '-' + empIdx;
  }

  showShiftWindow() {
    this.contextMenu = false;
    this.showOptions = true;
  }

  disableContextMenu() {
    this.contextMenu = false;
    this.showOptions = false;
    this.selectedField = null;
    this.leaveOptionsContext = false;
  }

  addShift(even) {
    event.preventDefault();
    this.disableContextMenu();
    console.log(even.shiftStart);
  }

  addLeave(reason) {
    console.log(reason);
    this.disableContextMenu();
  }

  minMaxIdx(minDayIdx, minEmpIdx, maxDayIdx, maxEmpIdx) {
    this.minDayIdx = minDayIdx;
    this.minEmpIdx = minEmpIdx;
    this.maxDayIdx = maxDayIdx;
    this.maxEmpIdx = maxEmpIdx;
  }

  mouseDown(dayIdx, empIdx) {
    this.buforDayIdx = dayIdx;
    this.buforEmpIdx = empIdx;
    this.minMaxIdx(dayIdx, empIdx, dayIdx, empIdx);
    this.selectedCells = true;
  }

  mouseMove(dayIdx, empIdx) {
    if (this.selectedCells === true) {
      const msg = dayIdx + '-' + empIdx;
      if (this.selectedField !== (msg)) {
        if (dayIdx >= this.buforDayIdx && empIdx >= this.buforEmpIdx) {
          this.minMaxIdx(this.buforDayIdx, this.buforEmpIdx, dayIdx, empIdx);

        } else if (dayIdx < this.buforDayIdx && empIdx < this.buforEmpIdx) {
          this.minMaxIdx(dayIdx, empIdx, this.buforDayIdx, this.buforEmpIdx);

        } else if (dayIdx >= this.buforDayIdx && empIdx < this.buforEmpIdx) {
          this.minMaxIdx(this.buforDayIdx, empIdx, dayIdx, this.buforEmpIdx);
        } else {
          this.minMaxIdx(dayIdx, this.buforEmpIdx, this.buforDayIdx, empIdx);
        }
        this.selectedField = msg;
      }
    }

  }
}
