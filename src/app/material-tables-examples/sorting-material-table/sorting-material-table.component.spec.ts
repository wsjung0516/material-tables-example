import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingMaterialTableComponent } from './sorting-material-table.component';

describe('SortingMaterialTableComponent', () => {
  let component: SortingMaterialTableComponent;
  let fixture: ComponentFixture<SortingMaterialTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortingMaterialTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingMaterialTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
