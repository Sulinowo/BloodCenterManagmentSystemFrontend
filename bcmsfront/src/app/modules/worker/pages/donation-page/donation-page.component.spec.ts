import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationPageComponent } from './donation-page.component';

describe('DonationPageComponent', () => {
  let component: DonationPageComponent;
  let fixture: ComponentFixture<DonationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonationPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
