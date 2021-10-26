import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodDonatorPagesComponent } from './blood-donator-pages.component';

describe('BloodDonatorPagesComponent', () => {
  let component: BloodDonatorPagesComponent;
  let fixture: ComponentFixture<BloodDonatorPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodDonatorPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodDonatorPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
