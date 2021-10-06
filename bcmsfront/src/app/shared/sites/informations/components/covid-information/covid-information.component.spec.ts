import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidInformationComponent } from './covid-information.component';

describe('CovidInformationComponent', () => {
  let component: CovidInformationComponent;
  let fixture: ComponentFixture<CovidInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
