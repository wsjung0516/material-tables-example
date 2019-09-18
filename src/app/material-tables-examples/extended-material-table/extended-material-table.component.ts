import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Student } from '../Interfaces/student';

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

  data: Student[] = [
    {
      name: 'Czarna lista studenciaków',
      extended: true
    } as unknown as Student,
    {
      id: 1,
      name: 'Grzegorz',
      surname: 'Brzęczyszczykiewicz',
      age: 22
    },
    {
      id: 2,
      name: 'Biała lista studenciaków',
      extended: true
    } as unknown as Student,
    {
      id: 3,
      name: 'Grzegorz',
      surname: 'Brzęczyszczykiewicz',
      age: 22
    }
  ];

  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>();

  isExtended = (index, element) => element.extended;

  constructor() {

  }

  ngOnInit() {
    this.dataSource.data = this.data;
  }

}
