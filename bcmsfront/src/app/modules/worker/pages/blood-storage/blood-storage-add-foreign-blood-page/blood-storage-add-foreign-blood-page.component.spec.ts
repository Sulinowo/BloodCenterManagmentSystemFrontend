import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodStorageAddForeignBloodPageComponent } from './blood-storage-add-foreign-blood-page.component';

describe('BloodStorageAddForeignBloodPageComponent', () => {
  let component: BloodStorageAddForeignBloodPageComponent;
  let fixture: ComponentFixture<BloodStorageAddForeignBloodPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BloodStorageAddForeignBloodPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodStorageAddForeignBloodPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
