import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatButtonToggleModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonToggleModule
  ],
  exports: [
    MatTableModule,
    MatButtonToggleModule
  ]
})
export class MaterialModule { }
