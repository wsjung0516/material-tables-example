import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedMaterialTableComponent } from './extended-material-table.component';

describe('ExtendedMaterialTableComponent', () => {
  let component: ExtendedMaterialTableComponent;
  let fixture: ComponentFixture<ExtendedMaterialTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendedMaterialTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedMaterialTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
