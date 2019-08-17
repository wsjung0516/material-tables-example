import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtendedMaterialTableComponent } from './extended-material-table/extended-material-table.component';
import { MaterialModule } from '../material/material.module';
import { ExampleRoutingModule } from './examples-routing/examples-routing.module';
import { MatTableExamplesComponent } from './mat-table-examples/mat-table-examples.component';
import { BasicMaterialTableComponent } from './basic-material-table/basic-material-table.component';
import { ExpandableMaterialTableComponent } from './expandable-material-table/expandable-material-table.component';
import { ResizableMaterialTableComponent } from './resizable-material-table/resizable-material-table.component';
// tslint:disable-next-line: max-line-length
import { AbstractResizableMaterialTableComponent } from './resizable-material-table/abstract-resizable-material-table/abstract-resizable-material-table.component';
import { SortingMaterialTableComponent } from './sorting-material-table/sorting-material-table.component';
import { MatSortModule } from '@angular/material';
import { FilteredMatTableComponent } from './mat-table-examples/filtered-mat-table/filtered-mat-table.component';
import { MultiSelectMatTableComponent } from './multi-select-mat-table/multi-select-mat-table.component';

@NgModule({
  declarations: [
    ExtendedMaterialTableComponent,
    MatTableExamplesComponent,
    BasicMaterialTableComponent,
    ExpandableMaterialTableComponent,
    ResizableMaterialTableComponent,
    AbstractResizableMaterialTableComponent,
    SortingMaterialTableComponent,
    FilteredMatTableComponent,
    MultiSelectMatTableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ExampleRoutingModule,
    MatSortModule
  ],
  exports: [
    MatTableExamplesComponent
  ]
})
export class MaterialTablesExamplesModule { }
