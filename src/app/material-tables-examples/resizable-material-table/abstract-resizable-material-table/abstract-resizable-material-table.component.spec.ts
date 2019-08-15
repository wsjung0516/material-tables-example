import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractResizableMaterialTableComponent } from './abstract-resizable-material-table.component';

describe('AbstractResizableMaterialTableComponent', () => {
  let component: AbstractResizableMaterialTableComponent;
  let fixture: ComponentFixture<AbstractResizableMaterialTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbstractResizableMaterialTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractResizableMaterialTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
