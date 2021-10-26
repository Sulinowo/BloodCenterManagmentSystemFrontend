import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBloodUnitComponent } from './add-blood-unit.component';

describe('AddBloodUnitComponent', () => {
  let component: AddBloodUnitComponent;
  let fixture: ComponentFixture<AddBloodUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBloodUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBloodUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
