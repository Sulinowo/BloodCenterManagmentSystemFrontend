import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodNeededPageComponent } from './blood-needed-page.component';

describe('BloodNeededPageComponent', () => {
  let component: BloodNeededPageComponent;
  let fixture: ComponentFixture<BloodNeededPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BloodNeededPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodNeededPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
