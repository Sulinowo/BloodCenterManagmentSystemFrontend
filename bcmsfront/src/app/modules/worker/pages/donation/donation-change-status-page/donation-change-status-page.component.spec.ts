import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationChangeStatusPageComponent } from './donation-change-status-page.component';

describe('DonationChangeStatusPageComponent', () => {
  let component: DonationChangeStatusPageComponent;
  let fixture: ComponentFixture<DonationChangeStatusPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonationChangeStatusPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationChangeStatusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
