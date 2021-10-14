import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceReportComponent } from './attendance-report/attendance-report.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {
    path : "create-student",
    component : CreateStudentComponent
  },
  {
    path : "student-list",
    component : StudentListComponent
  },
  {
    path : "student-edit/:id",
    component : StudentEditComponent
  },
  {
    path : "attendance",
    component : AttendanceComponent
  },
  {
    path : "attendance-report",
    component : AttendanceReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
