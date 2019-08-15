import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableExamplesComponent } from './mat-table-examples.component';

describe('MatTableExamplesComponent', () => {
  let component: MatTableExamplesComponent;
  let fixture: ComponentFixture<MatTableExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatTableExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTableExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
