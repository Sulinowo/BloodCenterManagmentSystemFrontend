import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodDonatorDetailsPagesComponent } from './blood-donator-details-pages.component';

describe('BloodDonatorDetailsPagesComponent', () => {
  let component: BloodDonatorDetailsPagesComponent;
  let fixture: ComponentFixture<BloodDonatorDetailsPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BloodDonatorDetailsPagesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodDonatorDetailsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
