import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeelisthyderabadComponent } from './employeelisthyderabad.component';

describe('EmployeelisthyderabadComponent', () => {
  let component: EmployeelisthyderabadComponent;
  let fixture: ComponentFixture<EmployeelisthyderabadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeelisthyderabadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeelisthyderabadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
