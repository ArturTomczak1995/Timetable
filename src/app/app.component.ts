import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  view = 'employeesView';
  changeView(view: string) {
    switch (view) {
      case 'calendarView': { this.view = 'calendarView'; break; }
      case 'employeesView': { this.view = 'employeesView'; break; }
      default: { this.view = 'calendarView'; }
    }
  }
}
