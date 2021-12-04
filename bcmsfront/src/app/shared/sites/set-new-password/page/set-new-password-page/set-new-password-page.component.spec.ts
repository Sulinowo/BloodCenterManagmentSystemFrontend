import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetNewPasswordPageComponent } from './set-new-password-page.component';

describe('SetNewPasswordPageComponent', () => {
  let component: SetNewPasswordPageComponent;
  let fixture: ComponentFixture<SetNewPasswordPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetNewPasswordPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetNewPasswordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
