import { Student } from './../../Interfaces/student';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  data: Student[] =
  [
    {
      id: 1,
      name: 'Grzegorz',
      surname: 'Brzęczyszczykiewicz',
      age: 22
    },
    {
      id: 2,
      name: 'Marian',
      surname: 'Paździoch',
      age: 60
    },
    {
      id: 3,
      name: 'Waldemar',
      surname: 'Kiepski',
      age: 35
    }
  ];

  constructor() { }
}
