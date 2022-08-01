import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBloodUnitsComponent } from './show-blood-units.component';

describe('ShowBloodUnitsComponent', () => {
  let component: ShowBloodUnitsComponent;
  let fixture: ComponentFixture<ShowBloodUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowBloodUnitsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBloodUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
