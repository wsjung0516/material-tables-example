import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizableMaterialTableComponent } from './resizable-material-table.component';

describe('ResizableMaterialTableComponent', () => {
  let component: ResizableMaterialTableComponent;
  let fixture: ComponentFixture<ResizableMaterialTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResizableMaterialTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResizableMaterialTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
