import { FilteredMatTableComponent } from './../mat-table-examples/filtered-mat-table/filtered-mat-table.component';
import { ExtendedMaterialTableComponent } from './../extended-material-table/extended-material-table.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatTableExamplesComponent } from '../mat-table-examples/mat-table-examples.component';
import { BasicMaterialTableComponent } from '../basic-material-table/basic-material-table.component';
import { ExpandableMaterialTableComponent } from '../expandable-material-table/expandable-material-table.component';
import { ResizableMaterialTableComponent } from '../resizable-material-table/resizable-material-table.component';
import { SortingMaterialTableComponent } from '../sorting-material-table/sorting-material-table.component';

const routes: Routes = [
  {
    path:      'matTableExamples',
    component: MatTableExamplesComponent,
    children: [
      {
        path: 'basic',
        component: BasicMaterialTableComponent
      },
      {
        path: 'extended',
        component: ExtendedMaterialTableComponent
      },
      {
        path: 'expendable',
        component: ExpandableMaterialTableComponent
      },
      {
        path: 'resizable',
        component: ResizableMaterialTableComponent
      },
      {
        path: 'basesorting',
        component: SortingMaterialTableComponent
      },
      {
        path: 'filtering',
        component: FilteredMatTableComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ExampleRoutingModule { }
