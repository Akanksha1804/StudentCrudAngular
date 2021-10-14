import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Chart from 'chart.js';
import { Atten, displayData } from '../modal';
import { UserService } from '../user.service';


@Component({
  selector: 'app-attendance-report',
  templateUrl: './attendance-report.component.html',
  styleUrls: ['./attendance-report.component.css']
})
export class AttendanceReportComponent implements OnInit {

  attendanceList:Array<Atten>=[]
  

  constructor(private userService : UserService ) {
    
    this.userService.getAllAttendance().subscribe((data:any) => {
      console.log("exc");
      console.log(data);
      this.attendanceList = data
    })
    
  }

  ngOnInit( ): void {
    this.userService.getAllAttendance().subscribe( res  => {
      
      let dates:any = []
      let status:any = []
      let x :any = []
      res.forEach((res) => {
        if(dates.indexOf(res.dateOfAttendance) === -1){
          dates.push(res.dateOfAttendance)
        }
        status.push(res.status)
      })

      console.log(dates)

      dates.forEach( (element : any) => {
        let count =0
        res.forEach( (res) => {
          if( element === res.dateOfAttendance){
            count = count+1
          }
        })
        x.push(count)
      });

      console.log(x)

      //let htmlRef = this.elementRef.nativeElement.querySelector("canvas");
      var myChart = new Chart( "myChart", {
        type : 'line',
        data : {
          labels : dates,
          datasets : [
            {
              data : x,
              borderColor : '#3cba9f',
              fill : false
            }
          ]
        },
        options : {
          legend : {
            display : false
          },
          scales : {
            xAxes: [{
              display : true
            }],
            yAxes: [{
              display : true
            }]
          }
        }
      })
    })

  }

}
