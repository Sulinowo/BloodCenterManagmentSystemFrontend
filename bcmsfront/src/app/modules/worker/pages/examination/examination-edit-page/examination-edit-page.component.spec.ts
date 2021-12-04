import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationEditPageComponent } from './examination-edit-page.component';

describe('ExaminationEditPageComponent', () => {
  let component: ExaminationEditPageComponent;
  let fixture: ComponentFixture<ExaminationEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExaminationEditPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
