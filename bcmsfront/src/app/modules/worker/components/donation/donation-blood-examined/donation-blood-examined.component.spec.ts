import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationBloodExaminedComponent } from './donation-blood-examined.component';

describe('DonationBloodExaminedComponent', () => {
  let component: DonationBloodExaminedComponent;
  let fixture: ComponentFixture<DonationBloodExaminedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationBloodExaminedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationBloodExaminedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
