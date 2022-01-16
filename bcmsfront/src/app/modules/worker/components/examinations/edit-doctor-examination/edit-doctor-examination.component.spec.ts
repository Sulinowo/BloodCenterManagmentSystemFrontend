import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDoctorExaminationComponent } from './edit-doctor-examination.component';

describe('EditDoctorExaminationComponent', () => {
  let component: EditDoctorExaminationComponent;
  let fixture: ComponentFixture<EditDoctorExaminationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditDoctorExaminationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDoctorExaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
