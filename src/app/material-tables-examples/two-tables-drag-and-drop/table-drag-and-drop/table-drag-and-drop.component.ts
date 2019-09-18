import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material';
import { Student } from '../../Interfaces/student';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-table-drag-and-drop',
  templateUrl: './table-drag-and-drop.component.html',
  styleUrls: ['./table-drag-and-drop.component.scss']
})
export class TableDragAndDropComponent implements OnInit {

  @ViewChild(MatTable, { static: false }) matTable: MatTable<Student>;
  @ViewChild(CdkDropList, { static: false }) cdkDropList: CdkDropList;

  @Input() secondTable: TableDragAndDropComponent = null;

  displayedColumns: string[] = [
    'name',
    'surname',
    'age'
  ];

  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>();

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<Student[]>) {
    if (event.previousContainer === event.container) {
      console.log('move in array');
      console.log('item', event.item.data);
      console.log('item', event);
      const prevIndex = event.container.data.findIndex((d) => d === event.item.data);
      console.log('prev', prevIndex, event.previousIndex);
      console.log('current', event.currentIndex);
      console.log('data', event.container.data);
      moveItemInArray(event.container.data, prevIndex, event.currentIndex);
      this.matTable.renderRows();
    } else {
      console.log('move to array');
      const prevIndex = event.previousContainer.data.findIndex((d) => d === event.item.data);
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        prevIndex,
        event.currentIndex);
      this.matTable.renderRows();
      this.secondTable.matTable.renderRows();
    }
  }

}
