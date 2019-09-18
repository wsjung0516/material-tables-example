import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatButtonToggleModule, MatInputModule, MatCheckbox, MatCheckboxModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonToggleModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    FlexLayoutModule,
    DragDropModule,
    ReactiveFormsModule
  ],
  exports: [
    MatTableModule,
    MatButtonToggleModule,
    MatInputModule,
    MatCheckboxModule,
    FlexLayoutModule,
    MatIconModule,
    DragDropModule,
    ReactiveFormsModule
  ]
})
export class MaterialModule { }
