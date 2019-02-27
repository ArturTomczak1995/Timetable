import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CalendarDatesService {
  private daysInCalendar: number;
  private firstDayOfMonth: number;
  private previousMonthDays: number;
  weeksInMonth = 6;
  private currentMonthDays: number;
  weeksArr: any[][];
  dayName = moment.weekdays();

  constructor() { }

  pushToWeeksArr(minVal: number, maxVal: number, isCurrentMonth: boolean) {
    for (let i = minVal; i <= maxVal; i++) {
      const weeksArrLen = this.weeksArr.length - 1;
      this.weeksArr[weeksArrLen].push({i, isActive: isCurrentMonth});
      if (this.weeksArr[weeksArrLen].length % 7 === 0 && weeksArrLen !== this.weeksInMonth - 1) {
        this.weeksArr.push([]);
      }
    }
  }

  createCalendar(currentMonth: string, currentYear: string) {
    this.currentMonthDays = moment(currentMonth + currentYear, 'MMYYYY').daysInMonth();
    this.weeksArr = [[]];
    this.daysInCalendar = this.weeksInMonth * this.dayName.length;
    this.firstDayOfMonth = Number(moment('01' + currentMonth + currentYear, 'DDMMYYYY').format('d')) - 1;
    this.previousMonthDays = moment(currentMonth, 'MM').add(-1, 'month').daysInMonth();

    this.pushToWeeksArr(this.previousMonthDays - this.firstDayOfMonth, this.previousMonthDays, false);
    this.pushToWeeksArr(1, this.currentMonthDays, true);
    this.pushToWeeksArr(1, this.daysInCalendar - (this.currentMonthDays + this.firstDayOfMonth + 1), false);
    return this.weeksArr;
  }
}
