import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Result } from '../modal';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  userList : Array<Result> = []
  attendanceForm : FormGroup

  constructor(private userService : UserService , private router : Router) { 

    this.userService.getAllUser().subscribe((data : any) => {
      console.log(data);
      this.userList = data;
    })

    this.attendanceForm = new FormGroup({
      'dateOfAttendance' : new FormControl('',Validators.required),
      'studentName' : new FormControl('',Validators.required),
      'status' : new FormControl('',Validators.required)
    })
  }

  ngOnInit(): void {
  }

  submitAttendance(){
    Object.keys(this.attendanceForm.controls).forEach(field => {
      const control = this.attendanceForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });

    if(this.attendanceForm.valid){
      console.log(this.attendanceForm.value);
      this.userService.saveAttendance(this.attendanceForm.value).subscribe(() => {
        this.router.navigate(['/attendance-report'])
      },() => {
        alert("Something went wrong")
      })
      
    }
  }

}
