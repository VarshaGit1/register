import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeelistmangaloreComponent } from './employeelistmangalore.component';

describe('EmployeelistmangaloreComponent', () => {
  let component: EmployeelistmangaloreComponent;
  let fixture: ComponentFixture<EmployeelistmangaloreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeelistmangaloreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeelistmangaloreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
