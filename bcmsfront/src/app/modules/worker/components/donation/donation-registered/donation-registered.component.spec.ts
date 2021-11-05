import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationRegisteredComponent } from './donation-registered.component';

describe('DonationRegisteredComponent', () => {
  let component: DonationRegisteredComponent;
  let fixture: ComponentFixture<DonationRegisteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationRegisteredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationRegisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
