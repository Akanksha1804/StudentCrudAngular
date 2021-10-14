import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Result, User } from '../modal';
import { UserService } from '../user.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  id: number = 0;
  userForm: FormGroup;
  displayAnimation:boolean = false;
  constructor(private activeRoute: ActivatedRoute,private router:Router,private userService:UserService) {
    // this.id = this.activeRoute.snapshot.params.id;

    this.userForm = new FormGroup({
      'userName': new FormControl('', Validators.required),
      'userEmail': new FormControl('', [Validators.required, Validators.email]),
      'phoneNumber': new FormControl('', [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'country': new FormControl('', Validators.required)
    })

  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((paramsData) => {
      this.id = paramsData.id;
      this.userService.getUserByID(paramsData.id).subscribe((data:any) => {
        console.log(data)
        delete data.id
        this.userForm.setValue(data)
      })
    })



  }


  submitUser() {
    // console.log(this.userForm.controls)
    // console.log(Object.keys(this.userForm.controls)); // []
    // console.log(this.userForm.get('userName'))

    Object.keys(this.userForm.controls).forEach(field => {
      const control = this.userForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });

    if(this.userForm.valid){
      // console.log(this.userForm.value)
      this.userService.updateUserById(this.id,this.userForm.value).subscribe((data) => {
        this.router.navigate(["/student-list"])
      })
    }

    // this.displayAnimation = true
    
    

  }
}
