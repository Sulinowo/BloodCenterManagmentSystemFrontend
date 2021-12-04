import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllWorkersComponent } from './show-all-workers.component';

describe('ShowAllWorkersComponent', () => {
  let component: ShowAllWorkersComponent;
  let fixture: ComponentFixture<ShowAllWorkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowAllWorkersComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
