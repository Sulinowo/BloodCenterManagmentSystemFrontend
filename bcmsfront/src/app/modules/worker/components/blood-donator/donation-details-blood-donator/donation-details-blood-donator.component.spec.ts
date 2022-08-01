import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationDetailsBloodDonatorComponent } from './donation-details-blood-donator.component';

describe('DonationDetailsBloodDonatorComponent', () => {
  let component: DonationDetailsBloodDonatorComponent;
  let fixture: ComponentFixture<DonationDetailsBloodDonatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonationDetailsBloodDonatorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationDetailsBloodDonatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
