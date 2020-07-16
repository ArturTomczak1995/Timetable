import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Leaves} from '../interfaces/Leaves';

@Injectable({
  providedIn: 'root'
})
export class LeavesService {


  private getEmployeesUrl = 'http://127.0.0.1:8081/leaves';


  constructor(private http: HttpClient) { }

  getLeaves(): Observable<Leaves[]> {
    this.http.head('Access-Control-Allow-Origin');
    return this.http.get<Leaves[]>(this.getEmployeesUrl);
  }

  getELeaves(leaveId): Observable<Leaves> {
    this.http.head('Access-Control-Allow-Origin');
    return this.http.get<Leaves>(this.getEmployeesUrl + '/' + leaveId);
  }

  addLeaves(leave) {
    return this.http.post(this.getEmployeesUrl, leave);
  }

  removeLeaves(leaveId) {
    return this.http.delete(this.getEmployeesUrl + '/' + leaveId);
  }

  updateLeaves(leave) {
    return this.http.put(this.getEmployeesUrl, leave);
  }

}
