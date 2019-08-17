import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectMatTableComponent } from './multi-select-mat-table.component';

describe('MultiSelectMatTableComponent', () => {
  let component: MultiSelectMatTableComponent;
  let fixture: ComponentFixture<MultiSelectMatTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSelectMatTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectMatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
