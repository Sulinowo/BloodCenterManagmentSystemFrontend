import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationProcessPageComponent } from './donation-process-page.component';

describe('DonationProcessPageComponent', () => {
  let component: DonationProcessPageComponent;
  let fixture: ComponentFixture<DonationProcessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonationProcessPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationProcessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
