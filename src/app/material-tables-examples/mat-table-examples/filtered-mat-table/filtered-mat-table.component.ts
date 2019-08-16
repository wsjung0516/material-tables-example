import { StudentsService } from './../Services/students.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-filtered-mat-table',
  templateUrl: './filtered-mat-table.component.html',
  styleUrls: ['./filtered-mat-table.component.scss']
})
export class FilteredMatTableComponent implements OnInit {

  query = '';

  displayedColumns: string[] = ['name', 'surname', 'age'];

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  constructor(
    private studentsService: StudentsService
  ) { }

  ngOnInit() {
    this.dataSource.data = this.studentsService.data;

    this.dataSource.filterPredicate = (data: any, query: string) => query !== '' ? (data.name + ' ' + data.surname).toLowerCase().search(query.toLocaleLowerCase()) !== -1 : false;
  }

  queryChanged(query: string) {
    this.dataSource.filter = query;
  }

}
