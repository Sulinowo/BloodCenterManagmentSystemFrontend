import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodStoragePageComponent } from './blood-storage-page.component';

describe('BloodStoragePageComponent', () => {
  let component: BloodStoragePageComponent;
  let fixture: ComponentFixture<BloodStoragePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodStoragePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodStoragePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
