import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBloodDonatorComponent } from './add-blood-donator.component';

describe('AddBloodDonatorComponent', () => {
  let component: AddBloodDonatorComponent;
  let fixture: ComponentFixture<AddBloodDonatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBloodDonatorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBloodDonatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
