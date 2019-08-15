import { ExtendedMaterialTableComponent } from './../extended-material-table/extended-material-table.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatTableExamplesComponent } from '../mat-table-examples/mat-table-examples.component';
import { BasicMaterialTableComponent } from '../basic-material-table/basic-material-table.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ExampleRoutingModule { }
