import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualifiedDonationPageComponent } from './qualified-donation-page.component';

describe('QualifiedDonationPageComponent', () => {
  let component: QualifiedDonationPageComponent;
  let fixture: ComponentFixture<QualifiedDonationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QualifiedDonationPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualifiedDonationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
