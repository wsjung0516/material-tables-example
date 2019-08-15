import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-extended-material-table',
  templateUrl: './extended-material-table.component.html',
  styleUrls: ['./extended-material-table.component.scss']
})
export class ExtendedMaterialTableComponent implements OnInit {

  displayedColumns: string[] = [
    'name',
    'surname',
    'age'
  ];

  data = [
    {
      name: 'Czarna lista studenciaków',
      extended: true
    },
    {
      name: 'Grzegorz',
      surname: 'Brzęczyszczykiewicz',
      age: 22
    },
    {
      name: 'Biała lista studenciaków',
      extended: true
    },
    {
      name: 'Grzegorz',
      surname: 'Brzęczyszczykiewicz',
      age: 22
    }
  ];

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  isExtended = (index, element) => element.extended;

  constructor() {

  }

  ngOnInit() {
    this.dataSource.data = this.data;
  }

}
