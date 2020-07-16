import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Hours} from '../interfaces/Hours';

@Injectable({
  providedIn: 'root'
})
export class ShiftHoursService {

  private getEmployeesUrl = 'http://127.0.0.1:8081/shifts-hours';


  constructor(private http: HttpClient) { }

  getHours(): Observable<Hours[]> {
    this.http.head('Access-Control-Allow-Origin');
    return this.http.get<Hours[]>(this.getEmployeesUrl);
  }

  addHours(hours) {
    return this.http.post(this.getEmployeesUrl, hours);
  }

  // removeHours(hoursId) {
  //   return this.http.delete(this.getEmployeesUrl + '/' + hoursId);
  // }
  //
  // updateHours(leave) {
  //   return this.http.put(this.getEmployeesUrl, leave);
  // }
}
