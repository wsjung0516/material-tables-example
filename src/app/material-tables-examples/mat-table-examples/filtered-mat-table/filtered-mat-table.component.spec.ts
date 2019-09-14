import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredMatTableComponent } from './filtered-mat-table.component';
import { MatTableModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { StudentsService } from '../Services/students.service';

describe('FilteredMatTableComponent', () => {
  let component: FilteredMatTableComponent;
  let fixture: ComponentFixture<FilteredMatTableComponent>;
  const studentsService: StudentsService = new StudentsService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FilteredMatTableComponent
      ],
      imports: [
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      providers: [
        StudentsService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredMatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(
    'FilteredMatTableComponent -> should have some data inside',
    () => {

      beforeEach(() => {
      });

      it('should have some data', () => {
        console.log(component.dataSource.data);
        expect(JSON.stringify(component.dataSource.data)).toEqual(JSON.stringify(studentsService.data));
      });

    });

});
