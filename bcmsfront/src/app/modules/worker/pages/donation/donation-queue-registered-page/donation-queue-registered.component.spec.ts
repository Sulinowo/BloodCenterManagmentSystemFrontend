import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DonationQueueRegisteredComponent } from './donation-queue-registered.component';



describe('DonationQueueRegisteredComponent', () => {
  let component: DonationQueueRegisteredComponent;
  let fixture: ComponentFixture<DonationQueueRegisteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationQueueRegisteredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationQueueRegisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
