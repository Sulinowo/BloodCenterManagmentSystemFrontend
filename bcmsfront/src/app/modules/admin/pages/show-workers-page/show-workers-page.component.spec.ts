import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWorkersPageComponent } from './show-workers-page.component';

describe('ShowWorkersPageComponent', () => {
  let component: ShowWorkersPageComponent;
  let fixture: ComponentFixture<ShowWorkersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowWorkersPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowWorkersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
