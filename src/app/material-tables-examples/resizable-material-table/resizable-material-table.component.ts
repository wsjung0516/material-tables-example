import { Component, OnInit, HostListener, ElementRef, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { MatTable } from '@angular/material';
import { AbstractResizableMaterialTableComponent } from './abstract-resizable-material-table/abstract-resizable-material-table.component';

@Component({
  selector: 'app-resizable-material-table',
  templateUrl: './resizable-material-table.component.html',
  styleUrls: ['./resizable-material-table.component.scss']
})
export class ResizableMaterialTableComponent extends AbstractResizableMaterialTableComponent implements OnInit, AfterViewInit {


  data =
  [
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

  dataSource = this.data;

  constructor(protected renderer: Renderer2) {
    super(renderer);

    this.columns = [
      { field: 'name', width: 100, },
      { field: 'surname', width: 350, },
      { field: 'age', width: 250, }
    ];
  }

  ngOnInit() {
    this.setDisplayedColumns();
  }

  ngAfterViewInit() {
    this.setTableResize(this.matTableRef.nativeElement.clientWidth);
  }

}
