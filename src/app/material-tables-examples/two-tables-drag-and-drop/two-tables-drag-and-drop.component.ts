import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { TableDragAndDropComponent } from './table-drag-and-drop/table-drag-and-drop.component';
import { StudentsService } from '../mat-table-examples/Services/students.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-two-tables-drag-and-drop',
  templateUrl: './two-tables-drag-and-drop.component.html',
  styleUrls: ['./two-tables-drag-and-drop.component.scss']
})
export class TwoTablesDragAndDropComponent implements OnInit, AfterViewInit {

  @ViewChild('firstTable', { static: false }) firstTable: TableDragAndDropComponent;
  @ViewChild('secondTable', { static: false }) secondTable: TableDragAndDropComponent;

  constructor(
    private studentsService: StudentsService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    timer(10).subscribe(() => {
      this.secondTable.dataSource.data = this.studentsService.data;
      console.log(this.firstTable.cdkDropList);
    });

  }

}
