import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationsQueueBloodExaminedComponent } from './donations-queue-blood-examined.component';

describe('DonationsQueueBloodExaminedComponent', () => {
  let component: DonationsQueueBloodExaminedComponent;
  let fixture: ComponentFixture<DonationsQueueBloodExaminedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationsQueueBloodExaminedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationsQueueBloodExaminedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
