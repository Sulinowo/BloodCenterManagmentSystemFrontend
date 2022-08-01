import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusDonationComponent } from './status-donation.component';

describe('StatusDonationComponent', () => {
  let component: StatusDonationComponent;
  let fixture: ComponentFixture<StatusDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatusDonationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
