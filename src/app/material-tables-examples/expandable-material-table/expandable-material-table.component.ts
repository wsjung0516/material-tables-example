import { StudentsService } from './../mat-table-examples/Services/students.service';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { DataSource } from '@angular/cdk/table';
import { Observable, of } from 'rxjs';

export class ExampleDataSource extends DataSource<any> {

  data: any[] = [];

  connect(): Observable<Object[]> {
    const rows = [];
    this.data.forEach(element => rows.push(element, { detailRow: true, element }));
    return of(rows);
  }

  disconnect() { }
}

@Component({
  selector: 'app-expandable-material-table',
  templateUrl: './expandable-material-table.component.html',
  styleUrls: ['./expandable-material-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ExpandableMaterialTableComponent implements OnInit {
  displayedColumns = ['name', 'surname', 'age'];

  expandedElement: any;

  dataSource = new ExampleDataSource();

  isExpansionDetailRow = (i: number, row: any) => row.hasOwnProperty('detailRow');

  constructor(
    private studentsService: StudentsService
  ) {
    this.dataSource.data = this.studentsService.data;
  }

  ngOnInit() {
  }

}

