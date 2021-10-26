import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllDonationsComponent } from './show-all-donations.component';

describe('ShowAllDonationsComponent', () => {
  let component: ShowAllDonationsComponent;
  let fixture: ComponentFixture<ShowAllDonationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllDonationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllDonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
