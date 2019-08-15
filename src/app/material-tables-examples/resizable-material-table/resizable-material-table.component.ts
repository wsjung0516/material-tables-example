import { Component, OnInit, HostListener, ElementRef, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { MatTable } from '@angular/material';

@Component({
  selector: 'app-resizable-material-table',
  templateUrl: './resizable-material-table.component.html',
  styleUrls: ['./resizable-material-table.component.scss']
})
export class ResizableMaterialTableComponent implements OnInit, AfterViewInit {

  title = 'Material Table column Resize';
  @ViewChild(MatTable, { read: ElementRef, static: false }) private matTableRef: ElementRef;

  columns: any[] = [
    { field: 'name', width: 100, },
    { field: 'surname', width: 350, },
    { field: 'age', width: 250, }
  ];


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

  displayedColumns: string[] = [];
  dataSource = this.data;

  resizeCursor = false;

  pressed = false;
  currentResizeIndex: number;
  startX: number;
  startWidth: number;
  isResizingRight: boolean;
  resizableMousemove: () => void;
  resizableMouseup: () => void;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.setDisplayedColumns();
  }

  ngAfterViewInit() {
    this.setTableResize(this.matTableRef.nativeElement.clientWidth);
  }

  setTableResize(tableWidth: number) {
    let totWidth = 0;
    this.columns.forEach((column) => {
      totWidth += column.width;
    });
    const scale = (tableWidth - 5) / totWidth;
    this.columns.forEach((column) => {
      column.width *= scale;
      this.setColumnWidth(column);
    });
  }

  setDisplayedColumns() {
    this.columns.forEach((column, index) => {
      column.index = index;
      this.displayedColumns[index] = column.field;
    });
  }

  onMouseMove(event: any, index: number) {
    const endPos = event.target.offsetLeft + event.target.clientWidth;

    if (endPos - event.pageX > 10 && endPos - event.pageX >= 0) {
      this.resizeCursor = false;
    } else {
      this.resizeCursor = true;
    }
  }

  onResizeColumn(event: any, index: number) {
    this.checkResizing(event, index);
    this.currentResizeIndex = index;
    this.pressed = true;
    this.startX = event.pageX;
    this.startWidth = event.target.clientWidth;

    const endPos = event.target.offsetLeft + event.target.clientWidth;

    if (endPos - event.pageX > 10 && endPos - event.pageX >= 0) {
      return;
    }

    event.preventDefault();
    this.mouseMove(index);
  }

  private checkResizing(event, index) {
    const cellData = this.getCellData(index);
    if ((index === 0) || (Math.abs(event.pageX - cellData.right) < cellData.width / 2 && index !== this.columns.length - 1)) {
      this.isResizingRight = true;
    } else {
      this.isResizingRight = false;
    }
  }

  private getCellData(index: number) {
    const headerRow = this.matTableRef.nativeElement.children[0];
    const cell = headerRow.children[index];
    return cell.getBoundingClientRect();
  }

  mouseMove(index: number) {
    this.resizableMousemove = this.renderer.listen('document', 'mousemove', (event) => {
      if (this.pressed && event.buttons) {
        const dx = (this.isResizingRight) ? (event.pageX - this.startX) : (-event.pageX + this.startX);
        const width = this.startWidth + dx;
        if (this.currentResizeIndex === index && width > 50) {
          this.setColumnWidthChanges(index, width);
        }
      }
    });
    this.resizableMouseup = this.renderer.listen('document', 'mouseup', (event) => {
      if (this.pressed) {
        this.pressed = false;
        this.currentResizeIndex = -1;
        this.resizableMousemove();
        this.resizableMouseup();
      }
    });
  }

  setColumnWidthChanges(index: number, width: number) {
    const orgWidth = this.columns[index].width;
    const dx = width - orgWidth;
    if (dx !== 0) {
      const j = (this.isResizingRight) ? index + 1 : index - 1;
      const newWidth = this.columns[j].width - dx;
      if (newWidth > 50) {
        this.columns[index].width = width;
        this.setColumnWidth(this.columns[index]);
        this.columns[j].width = newWidth;
        this.setColumnWidth(this.columns[j]);
      }
    }
  }

  setColumnWidth(column: any) {
    const columnEls = Array.from(document.getElementsByClassName('mat-column-' + column.field));
    columnEls.forEach((el: HTMLDivElement) => {
      el.style.width = column.width + 'px';
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setTableResize(this.matTableRef.nativeElement.clientWidth);
  }

}
