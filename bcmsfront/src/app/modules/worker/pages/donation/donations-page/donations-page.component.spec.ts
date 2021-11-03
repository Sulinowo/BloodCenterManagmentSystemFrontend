import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationsPageComponent } from './donations-page.component';

describe('DonationPageComponent', () => {
  let component: DonationsPageComponent;
  let fixture: ComponentFixture<DonationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonationsPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
