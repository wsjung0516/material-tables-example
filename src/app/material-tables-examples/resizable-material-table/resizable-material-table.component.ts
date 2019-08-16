import { StudentsService } from './../mat-table-examples/Services/students.service';
import { Component, OnInit, HostListener, ElementRef, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { MatTable, MatSort, MatTableDataSource } from '@angular/material';
import { AbstractResizableMaterialTableComponent } from './abstract-resizable-material-table/abstract-resizable-material-table.component';

@Component({
  selector: 'app-resizable-material-table',
  templateUrl: './resizable-material-table.component.html',
  styleUrls: ['./resizable-material-table.component.scss']
})
export class ResizableMaterialTableComponent extends AbstractResizableMaterialTableComponent implements OnInit, AfterViewInit {

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  constructor(
    protected renderer: Renderer2,
    private studnetsService: StudentsService
    ) {
    super(renderer);

    this.dataSource.data = this.studnetsService.data;

    this.columns = [
      { field: 'name', width: 100, },
      { field: 'surname', width: 350, },
      { field: 'age', width: 250, }
    ];
  }

  @ViewChild(MatSort, {static: false}) sort: MatSort;

  ngOnInit() {
    this.setDisplayedColumns();
  }

  ngAfterViewInit() {
    this.setTableResize(this.matTableRef.nativeElement.clientWidth);
    this.dataSource.sort = this.sort;
  }

}
