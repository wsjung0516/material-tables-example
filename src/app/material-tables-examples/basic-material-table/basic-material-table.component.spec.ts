import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicMaterialTableComponent } from './basic-material-table.component';

describe('BasicMaterialTableComponent', () => {
  let component: BasicMaterialTableComponent;
  let fixture: ComponentFixture<BasicMaterialTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicMaterialTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicMaterialTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
