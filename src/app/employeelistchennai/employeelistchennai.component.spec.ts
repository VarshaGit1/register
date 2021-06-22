import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeelistchennaiComponent } from './employeelistchennai.component';

describe('EmployeelistchennaiComponent', () => {
  let component: EmployeelistchennaiComponent;
  let fixture: ComponentFixture<EmployeelistchennaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeelistchennaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeelistchennaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
