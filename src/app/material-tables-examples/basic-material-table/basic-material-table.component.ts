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

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  constructor() { }

  ngOnInit() {
    this.dataSource.data = this.data;
  }

}
