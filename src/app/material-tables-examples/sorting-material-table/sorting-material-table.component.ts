import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-sorting-material-table',
  templateUrl: './sorting-material-table.component.html',
  styleUrls: ['./sorting-material-table.component.scss']
})
export class SortingMaterialTableComponent implements OnInit, AfterViewInit {

  data =
  [
    {
      name: 'Grzegorz',
      surname: 'Brzęczyszczykiewicz',
      age: 22
    },
    {
      name: 'Marian',
      surname: 'Paździoch',
      age: 60
    },
    {
      name: 'Waldemar',
      surname: 'Kiepski',
      age: 35
    }
  ];

  displayedColumns: string[] = ['name', 'surname', 'age'];

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor() {
    this.dataSource.data = this.data;
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

}
