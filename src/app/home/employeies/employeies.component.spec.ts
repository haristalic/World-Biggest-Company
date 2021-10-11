import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeiesComponent } from './employeies.component';

describe('EmployeiesComponent', () => {
  let component: EmployeiesComponent;
  let fixture: ComponentFixture<EmployeiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
