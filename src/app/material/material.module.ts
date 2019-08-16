import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatButtonToggleModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonToggleModule,
    MatInputModule,
  ],
  exports: [
    MatTableModule,
    MatButtonToggleModule,
    MatInputModule,
  ]
})
export class MaterialModule { }
