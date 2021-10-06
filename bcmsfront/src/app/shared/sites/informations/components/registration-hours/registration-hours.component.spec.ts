import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationHoursComponent } from './registration-hours.component';

describe('RegistrationHoursComponent', () => {
  let component: RegistrationHoursComponent;
  let fixture: ComponentFixture<RegistrationHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationHoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
