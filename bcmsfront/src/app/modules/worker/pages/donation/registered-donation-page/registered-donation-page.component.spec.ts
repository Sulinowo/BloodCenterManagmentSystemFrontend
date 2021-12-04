import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredDonationPageComponent } from './registered-donation-page.component';

describe('RegisteredDonationPageComponent', () => {
  let component: RegisteredDonationPageComponent;
  let fixture: ComponentFixture<RegisteredDonationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisteredDonationPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredDonationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
