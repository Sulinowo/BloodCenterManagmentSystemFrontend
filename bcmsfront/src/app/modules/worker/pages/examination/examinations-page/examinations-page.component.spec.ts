import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationsPageComponent } from './examinations-page.component';

describe('ExaminationsPageComponent', () => {
  let component: ExaminationsPageComponent;
  let fixture: ComponentFixture<ExaminationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExaminationsPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
