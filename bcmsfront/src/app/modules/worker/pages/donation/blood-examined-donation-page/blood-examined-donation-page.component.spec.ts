import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodExaminedDonationPageComponent } from './blood-examined-donation-page.component';

describe('BloodExaminedDonationPageComponent', () => {
  let component: BloodExaminedDonationPageComponent;
  let fixture: ComponentFixture<BloodExaminedDonationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BloodExaminedDonationPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodExaminedDonationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
