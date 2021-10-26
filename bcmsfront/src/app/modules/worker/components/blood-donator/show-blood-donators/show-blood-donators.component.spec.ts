import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBloodDonatorsComponent } from './show-blood-donators.component';

describe('ShowBloodDonatorsComponent', () => {
  let component: ShowBloodDonatorsComponent;
  let fixture: ComponentFixture<ShowBloodDonatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBloodDonatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBloodDonatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
