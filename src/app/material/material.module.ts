import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatButtonToggleModule, MatInputModule, MatCheckbox, MatCheckboxModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonToggleModule,
    MatInputModule,
    MatCheckboxModule
  ],
  exports: [
    MatTableModule,
    MatButtonToggleModule,
    MatInputModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
