import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodDonatorDonationDetailsPageComponent } from './blood-donator-donation-details-page.component';

describe('BloodDonatorDonationDetailsPageComponent', () => {
  let component: BloodDonatorDonationDetailsPageComponent;
  let fixture: ComponentFixture<BloodDonatorDonationDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BloodDonatorDonationDetailsPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodDonatorDonationDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
