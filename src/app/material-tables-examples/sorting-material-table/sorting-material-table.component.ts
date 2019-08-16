import { StudentsService } from './../mat-table-examples/Services/students.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-sorting-material-table',
  templateUrl: './sorting-material-table.component.html',
  styleUrls: ['./sorting-material-table.component.scss']
})
export class SortingMaterialTableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['name', 'surname', 'age'];

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(
    private studentsService: StudentsService
  ) {
    this.dataSource.data = this.studentsService.data;
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  sorting(sortEvent) {
    console.log(sortEvent);
  }

}
