import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { CalendarDatesService} from '../services/calendar-dates.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  private weeksArr;
  private currentMonth = moment().format('MM');
  private currentYear = moment().format('YYYY');
  private monthName: string = moment.months()[Number(this.currentMonth) - 1];


  constructor(private calendarDatesService: CalendarDatesService) {
  }

  ngOnInit() {
    this.weeksArr = this.calendarDatesService.createCalendar(this.currentMonth, this.currentYear);
  }

  changeMonth(changeValue: number) {
    let monthBufor = Number(this.currentMonth) + changeValue;
    if (monthBufor ===  0) {
      monthBufor = 12;
      this.currentYear = (Number(this.currentYear) - 1).toString();
    }
    if (monthBufor === 13) {
      monthBufor = 1;
      this.currentYear = (Number(this.currentYear) + 1).toString();
    }
    this.currentMonth = '0' + ( monthBufor ).toString();
    this.monthName = moment.months()[Number(this.currentMonth) - 1];
    this.weeksArr = this.calendarDatesService.createCalendar(this.currentMonth, this.currentYear);
  }

  changeYear(changeValue: number) {
    let yearBufor = Number(this.currentYear) + changeValue;
    if (yearBufor ===  0) { yearBufor = 12; }
    if (yearBufor === 13) { yearBufor = 1; }
    this.currentYear = ( yearBufor ).toString();
    this.weeksArr = this.calendarDatesService.createCalendar(this.currentMonth, this.currentYear);
  }
}
