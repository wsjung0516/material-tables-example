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

  data: any[] = [
    {
      name: 'Grzegorz',
      surname: 'Brzęczyszczykiewicz',
      age: 22
    },
    {
      name: 'Marian',
      surname: 'Paździoch',
      age: 60
    },
    {
      name: 'Waldemar',
      surname: 'Kiepski',
      age: 35
    }
  ];

  constructor(protected renderer: Renderer2) {
    super(renderer);

    this.dataSource.data = this.data;

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
