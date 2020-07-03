import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { Student } from '../../model/student.model';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  constructor(private studentService: StudentService) { }

   studentDetails: Student[];

  ngOnInit(): void {
    console.log("adsdasdasd");
    this.studentService.getStudentDetails().subscribe(data => {
      this.studentDetails=data;
    });

  }

}
