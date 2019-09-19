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
      const prevIndex = event.container.data.findIndex((d) => d === event.item.data);
      moveItemInArray(event.container.data, prevIndex, event.currentIndex);
      this.matTable.renderRows();
    } else {
      const prevIndex = event.previousContainer.data.findIndex((d) => d === event.item.data);
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        prevIndex,
        event.currentIndex);
      this.matTable.renderRows();
      this.secondTable.matTable.renderRows();
    }
  }

  moveItem(index: number) {
    const element: Student[] = this.dataSource.data.splice(index, 1);
    this.matTable.renderRows();
    this.secondTable.dataSource.data.push(element[0]);
    this.secondTable.matTable.renderRows();
  }

}
