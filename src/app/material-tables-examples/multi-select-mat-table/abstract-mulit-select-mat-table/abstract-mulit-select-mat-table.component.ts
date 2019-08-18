import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-abstract-mulit-select-mat-table',
  template: ``
})
export class AbstractMulitSelectMatTableComponent<RECORD_TYPE> implements OnInit {

  dataSource: MatTableDataSource<RECORD_TYPE> = new MatTableDataSource<RECORD_TYPE>();
  displayedColumns: string[];

  selection: SelectionModel<RECORD_TYPE>;

  constructor() { }

  ngOnInit() {
    this.selection = new SelectionModel<RECORD_TYPE>(true, []);
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

  checkboxLabel(row: RECORD_TYPE): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} wiersz`;
  }

}
