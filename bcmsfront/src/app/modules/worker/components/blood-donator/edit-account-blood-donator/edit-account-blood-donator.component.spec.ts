import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAccountBloodDonatorComponent } from './edit-account-blood-donator.component';

describe('EditAccountBloodDonatorComponent', () => {
  let component: EditAccountBloodDonatorComponent;
  let fixture: ComponentFixture<EditAccountBloodDonatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditAccountBloodDonatorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAccountBloodDonatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
