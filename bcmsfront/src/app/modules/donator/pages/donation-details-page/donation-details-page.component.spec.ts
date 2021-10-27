import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationDetailsPageComponent } from './donation-details-page.component';

describe('DonationDetailsPageComponent', () => {
  let component: DonationDetailsPageComponent;
  let fixture: ComponentFixture<DonationDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonationDetailsPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
