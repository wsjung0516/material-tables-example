import { Student } from './../Interfaces/student';
import { StudentsService } from './../mat-table-examples/Services/students.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-basic-material-table',
  templateUrl: './basic-material-table.component.html',
  styleUrls: ['./basic-material-table.component.scss']
})
export class BasicMaterialTableComponent implements OnInit {

  displayedColumns: string[] = [
    'name',
    'surname',
    'age'
  ];

  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>();

  constructor(
    private studentsService: StudentsService
  ) { }

  ngOnInit() {
    this.dataSource.data = this.studentsService.data;
  }

}
