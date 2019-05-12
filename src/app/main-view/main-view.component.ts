import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  view = 'employeesView';

  ngOnInit() {
  }

  changeView(view: string) {
    switch (view) {
      case 'calendarView': { this.view = 'calendarView'; break; }
      case 'employeesView': { this.view = 'employeesView'; break; }
      default: { this.view = 'calendarView'; }
    }
  }

}
