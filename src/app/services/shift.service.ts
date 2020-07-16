import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Shifts} from '../models/shifts';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {

  private getEmployeesUrl = 'http://127.0.0.1:8081/employees';


  constructor(private http: HttpClient) { }

  getShifts(): Observable<Shifts[]> {
    this.http.head('Access-Control-Allow-Origin');
    return this.http.get<Shifts[]>(this.getEmployeesUrl);
  }

  getShift(shiftId): Observable<Shifts> {
    this.http.head('Access-Control-Allow-Origin');
    return this.http.get<Shifts>(this.getEmployeesUrl + '/' + shiftId);
  }

  addShift(employeeId, shift) {
    return this.http.post(this.getEmployeesUrl + '/' + employeeId + '/shifts', shift);
  }

  removeShift(shiftId) {
    return this.http.delete(this.getEmployeesUrl + '/' + shiftId);
  }

  updateShift(shift) {
    return this.http.put(this.getEmployeesUrl, shift);
  }
}
