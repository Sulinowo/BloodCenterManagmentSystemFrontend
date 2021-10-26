import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDonationsQueueComponent } from './show-donations-queue.component';

describe('ShowDonationsQueueComponent', () => {
  let component: ShowDonationsQueueComponent;
  let fixture: ComponentFixture<ShowDonationsQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDonationsQueueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDonationsQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
