import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationStatusPageComponent } from './donation-status-page.component';

describe('DonationStatusPageComponent', () => {
  let component: DonationStatusPageComponent;
  let fixture: ComponentFixture<DonationStatusPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationStatusPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationStatusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
