import { Component } from '@angular/core';
import { AppServiceService } from './app-service.service';
import { Student } from './model/student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'angular-demo';

  constructor(private appService: AppServiceService) { }

   studentDetails: Student[];

  ngOnInit(): void {
    this.appService.getStudentDetails().subscribe(data => {
      this.studentDetails=data;
    });

  }
}
