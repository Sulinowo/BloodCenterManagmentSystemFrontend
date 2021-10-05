import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodNeededComponent } from './blood-needed.component';

describe('BloodNeededComponent', () => {
  let component: BloodNeededComponent;
  let fixture: ComponentFixture<BloodNeededComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodNeededComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodNeededComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
