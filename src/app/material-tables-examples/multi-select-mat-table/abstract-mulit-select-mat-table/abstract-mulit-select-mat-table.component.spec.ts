import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractMulitSelectMatTableComponent } from './abstract-mulit-select-mat-table.component';

describe('AbstractMulitSelectMatTableComponent', () => {
  let component: AbstractMulitSelectMatTableComponent;
  let fixture: ComponentFixture<AbstractMulitSelectMatTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbstractMulitSelectMatTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractMulitSelectMatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
