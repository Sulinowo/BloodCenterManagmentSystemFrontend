import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDonationsBloodDonatorComponent } from './show-donations-blood-donator.component';

describe('ShowDonationsBloodDonatorComponent', () => {
  let component: ShowDonationsBloodDonatorComponent;
  let fixture: ComponentFixture<ShowDonationsBloodDonatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDonationsBloodDonatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDonationsBloodDonatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
