import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsBloodDonatorComponent } from './user-details-blood-donator.component';

describe('UserDetailsBloodDonatorComponent', () => {
  let component: UserDetailsBloodDonatorComponent;
  let fixture: ComponentFixture<UserDetailsBloodDonatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsBloodDonatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsBloodDonatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
