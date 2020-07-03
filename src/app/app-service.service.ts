import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './model/student.model';


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  getStudentDetails(): Observable<Student[]>{
    return this.http.get<Student[]>('http://localhost:8080/api/student');

  }

}
