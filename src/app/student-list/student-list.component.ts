import { Component, OnInit } from '@angular/core';
import {  User, Result } from '../modal';
import { UserService } from '../user.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  userList:Array<Result>=[]
  
  constructor(private userService:UserService) {
    this.userService.getAllUser().subscribe((data:any) => {
      console.log("exc");
      console.log(data);
      this.userList = data
    })
   }

  ngOnInit(): void {
  }

  deleteData(id:number){
    this.userService.deleteUserById(id).subscribe(() => {
      this.userService.getAllUser().subscribe((data:any) => {
        this.userList = data
      })
    })
  }

}
