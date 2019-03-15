import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';

import {ContextMenuSettingsService} from '../services/context-menu-settings.service';
import {CalendarDatesService} from '../services/calendar-dates.service';
import {EmployeesService} from '../services/employees.service';

@Component({
  selector: 'app-employees-schedule',
  templateUrl: './employees-schedule.component.html',
  styleUrls: ['./employees-schedule.component.css']
})
export class EmployeesScheduleComponent implements OnInit {


  constructor(private calendarDatesService: CalendarDatesService,
              private employeesService: EmployeesService,
              private contextMenuSettings: ContextMenuSettingsService
  ) {
  }

  private currentMonth = moment().format('MM');
  private currentYear = moment().format('YYYY');
  shiftStart = '06:00';
  // shiftEnd = '18:00';

  private x: null;
  private y: null;

  private employees = [];
  private selectedField: string;
  private employeeClass: number;
  private calendarDaysArr: any;
  private dayClass: any;
  private leaveOptionsContext: boolean;
  private contextMenu = false;
  private selectedCells = false;

  private minDayIdx: number;
  private minEmpIdx: number;
  private maxDayIdx: number;
  private maxEmpIdx: number;
  private buforEmpIdx: number;
  private buforDayIdx: number;


  ngOnInit() {
    this.calendarDaysArr = this.calendarDatesService.calendarDays(this.currentMonth, this.currentYear);
    this.employeesService.getEmployees()
      .subscribe(data => this.employees = data);
    this.contextMenuSettings.currentMessage.subscribe(message => this.leaveOptionsContext = message);

  }

  disableContextMenu() {
    this.contextMenu = false;
    this.selectedField = null;
  }

  onRightClick(event, dayIdx, empIdx) {
    this.disableContextMenu();
    setTimeout(() => {
    this.x = event.clientX;
    this.y = event.clientY;
    this.contextMenu = true;
    this.selectedField = dayIdx + '-' + empIdx;
    }, 10);
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
