import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Atten, Result, User } from './modal';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData : Array<User> = []
  constructor(private http:HttpClient) { }

  saveAttendance(attendance : any){
    return this.http.post(`https://61658cbbcb73ea00176420bd.mockapi.io/attendance`,attendance)
  }

  saveUser(user : User){
    //this.userData.push(user);
    return this.http.post(`https://61658cbbcb73ea00176420bd.mockapi.io/users`,user)
  }

  getAllUser(){
    return this.http.get<Array<User>>(`https://61658cbbcb73ea00176420bd.mockapi.io/users`)
  }

  getAllAttendance(){
    return this.http.get<Array<Atten>>(`https://61658cbbcb73ea00176420bd.mockapi.io/attendance`)
  }

  getUserByID(id:number){
    return this.http.get<Result>(`https://61658cbbcb73ea00176420bd.mockapi.io/users/${id}`)
  }

  updateUserById(userId:number,userdata:User){
    return this.http.put(`https://61658cbbcb73ea00176420bd.mockapi.io/users/${userId}`,userdata)
  }

  deleteUserById(id:number){
    return this.http.delete(`https://61658cbbcb73ea00176420bd.mockapi.io/users/${id}`)
  }
}
