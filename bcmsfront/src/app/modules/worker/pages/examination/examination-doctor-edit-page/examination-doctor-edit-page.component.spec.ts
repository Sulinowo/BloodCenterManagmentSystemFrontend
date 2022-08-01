import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationDoctorEditPageComponent } from './examination-doctor-edit-page.component';

describe('ExaminationDoctorEditPageComponent', () => {
  let component: ExaminationDoctorEditPageComponent;
  let fixture: ComponentFixture<ExaminationDoctorEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExaminationDoctorEditPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationDoctorEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
