import { StudentsService } from './../mat-table-examples/Services/students.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-multi-select-mat-table',
  templateUrl: './multi-select-mat-table.component.html',
  styleUrls: ['./multi-select-mat-table.component.scss']
})
export class MultiSelectMatTableComponent implements OnInit {

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  displayedColumns: string[] = [
    'select',
    'name',
    'surname',
    'age'
  ];

  selection: SelectionModel<any>;

  constructor(
    private studentsService: StudentsService
  ) { }

  ngOnInit() {
    this.dataSource.data = this.studentsService.data;
    this.selection = new SelectionModel<any>(true, []);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} wiersz`;
  }

}
