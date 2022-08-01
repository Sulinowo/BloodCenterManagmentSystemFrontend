import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationDoctorPageComponent } from './examination-doctor-page.component';

describe('ExaminationDoctorPageComponent', () => {
  let component: ExaminationDoctorPageComponent;
  let fixture: ComponentFixture<ExaminationDoctorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExaminationDoctorPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationDoctorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
