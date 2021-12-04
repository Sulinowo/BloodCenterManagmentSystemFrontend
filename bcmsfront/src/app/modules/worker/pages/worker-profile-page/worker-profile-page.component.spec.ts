import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerProfilePageComponent } from './worker-profile-page.component';

describe('WorkerProfilePageComponent', () => {
  let component: WorkerProfilePageComponent;
  let fixture: ComponentFixture<WorkerProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkerProfilePageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
