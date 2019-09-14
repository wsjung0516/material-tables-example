import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableExamplesComponent } from './mat-table-examples.component';
import { MatTableModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

describe('MatTableExamplesComponent', () => {
  let component: MatTableExamplesComponent;
  let fixture: ComponentFixture<MatTableExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatTableExamplesComponent ],
      imports: [
        RouterTestingModule,
        MatTableModule,
        BrowserModule,
        RouterModule,
        FormsModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTableExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
