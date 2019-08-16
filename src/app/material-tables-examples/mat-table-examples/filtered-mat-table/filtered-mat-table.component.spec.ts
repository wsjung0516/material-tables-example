import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredMatTableComponent } from './filtered-mat-table.component';

describe('FilteredMatTableComponent', () => {
  let component: FilteredMatTableComponent;
  let fixture: ComponentFixture<FilteredMatTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteredMatTableComponent ]
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
});
