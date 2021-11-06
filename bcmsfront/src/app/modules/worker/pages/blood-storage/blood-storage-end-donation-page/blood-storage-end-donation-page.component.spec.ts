import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodStorageEndDonationPageComponent } from './blood-storage-end-donation-page.component';

describe('BloodStorageEndDonationPageComponent', () => {
  let component: BloodStorageEndDonationPageComponent;
  let fixture: ComponentFixture<BloodStorageEndDonationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodStorageEndDonationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodStorageEndDonationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
