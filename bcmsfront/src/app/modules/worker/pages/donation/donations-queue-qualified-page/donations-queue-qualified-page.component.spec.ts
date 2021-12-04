import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationsQueueQualifiedPageComponent } from './donations-queue-qualified-page.component';

describe('DonationsQueueQualifiedPageComponent', () => {
  let component: DonationsQueueQualifiedPageComponent;
  let fixture: ComponentFixture<DonationsQueueQualifiedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonationsQueueQualifiedPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationsQueueQualifiedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
