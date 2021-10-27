import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodDonatorDonationsPageComponent } from './blood-donator-donations-page.component';

describe('BloodDonatorDonationsPageComponent', () => {
  let component: BloodDonatorDonationsPageComponent;
  let fixture: ComponentFixture<BloodDonatorDonationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BloodDonatorDonationsPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodDonatorDonationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
