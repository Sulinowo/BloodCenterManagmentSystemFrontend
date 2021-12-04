import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerPanelPageComponent } from './worker-panel-page.component';

describe('WorkerPanelPageComponent', () => {
  let component: WorkerPanelPageComponent;
  let fixture: ComponentFixture<WorkerPanelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkerPanelPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerPanelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
