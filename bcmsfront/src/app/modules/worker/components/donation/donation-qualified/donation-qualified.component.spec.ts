import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationQualifiedComponent } from './donation-qualified.component';

describe('DonationQualifiedComponent', () => {
  let component: DonationQualifiedComponent;
  let fixture: ComponentFixture<DonationQualifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationQualifiedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationQualifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
