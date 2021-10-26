import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodUnitForeignComponent } from './blood-unit-foreign.component';

describe('BloodUnitForeignComponent', () => {
  let component: BloodUnitForeignComponent;
  let fixture: ComponentFixture<BloodUnitForeignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodUnitForeignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodUnitForeignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
