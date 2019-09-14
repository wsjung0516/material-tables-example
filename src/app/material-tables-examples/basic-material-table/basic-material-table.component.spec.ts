import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicMaterialTableComponent } from './basic-material-table.component';
import { MatTableModule } from '@angular/material';

describe('BasicMaterialTableComponent', () => {
  let component: BasicMaterialTableComponent;
  let fixture: ComponentFixture<BasicMaterialTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicMaterialTableComponent ],
      imports: [
        MatTableModule
      ]
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
