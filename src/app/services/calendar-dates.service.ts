import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CalendarDatesService {
  constructor() { }

  private weeksInMonth = 6;
  private weeksArr: any[][] = [[]];
  private calendarDaysArr: any[] = [];
  private currentMonth: string;
  private currentYear: string;
  private actualMonth: string;

  private getDayName(day: number) {
    let dayName: string;
    const date: string = day.toString() + '/' + this.actualMonth + '/' + this.currentYear;
    dayName = moment(date, 'DD/MM/YYYY').format('dd');
    return dayName;
  }

  private pushToWeeksArr(minVal: number, maxVal: number, isCurrentMonth: boolean) {
    for (let i = minVal; i <= maxVal; i++) {
      const weeksArrLen = this.weeksArr.length - 1;
      this.weeksArr[weeksArrLen].push({i, isActive: isCurrentMonth});
      this.calendarDaysArr.push({i, isActive: isCurrentMonth, dayName: this.getDayName(i)});
      if (this.weeksArr[weeksArrLen].length % 7 === 0 && weeksArrLen !== this.weeksInMonth - 1) {
        this.weeksArr.push([]);
      }
    }
  }
  private createCalendar() {
    const dayName = moment.weekdays();
    const currentMonthDays = moment(this.currentMonth + this.currentYear, 'MMYYYY').daysInMonth();
    const daysInCalendar = this.weeksInMonth * dayName.length;
    const firstDayOfMonth = Number(moment('01' + this.currentMonth + this.currentYear, 'DDMMYYYY').format('d')) - 1;
    const previousMonthDays = moment(this.currentMonth, 'MM').add(-1, 'month').daysInMonth();

    this.actualMonth = (Number(this.currentMonth) - 1).toString();
    this.pushToWeeksArr(previousMonthDays - firstDayOfMonth, previousMonthDays, false);
    this.actualMonth = (Number(this.currentMonth)).toString();
    this.pushToWeeksArr(1, currentMonthDays, true);
    this.actualMonth = (Number(this.currentMonth) + 1).toString();
    this.pushToWeeksArr(1, daysInCalendar - (currentMonthDays + firstDayOfMonth + 1), false);
  }

  calendarWeeks(currentMonth: string, currentYear: string) {
    this.currentMonth = currentMonth;
    this.currentYear = currentYear;
    this.weeksArr = [[]];
    this.createCalendar();
    return this.weeksArr;
  }

  calendarDays(currentMonth: string, currentYear: string) {
    this.currentMonth = currentMonth;
    this.currentYear = currentYear;
    this.calendarDaysArr = [];
    this.createCalendar();
    return this.calendarDaysArr;
  }

}
