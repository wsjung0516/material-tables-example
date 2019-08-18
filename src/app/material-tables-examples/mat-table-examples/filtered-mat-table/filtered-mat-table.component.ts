import { StudentsService } from './../Services/students.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Student } from '../../Interfaces/student';

@Component({
  selector: 'app-filtered-mat-table',
  templateUrl: './filtered-mat-table.component.html',
  styleUrls: ['./filtered-mat-table.component.scss']
})
export class FilteredMatTableComponent implements OnInit, AfterViewInit {

  query = '';

  displayedColumns: string[] = ['name', 'surname', 'age'];

  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>();

  @ViewChild(MatSort, { static: false }) matSort: MatSort;

  constructor(
    private studentsService: StudentsService
  ) { }

  ngOnInit() {
    this.dataSource.data = this.studentsService.data;

    this.dataSource.filterPredicate = (data: any, query: string) => query !== ''
      ? (data.name + ' ' + data.surname).toLowerCase().search(query.toLocaleLowerCase()) !== -1 : false;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.matSort;
  }

  queryChanged(query: string) {
    this.dataSource.filter = query;
  }

}
