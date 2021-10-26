import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBloodDonatorComponent } from './search-blood-donator.component';

describe('SearchBloodDonatorComponent', () => {
  let component: SearchBloodDonatorComponent;
  let fixture: ComponentFixture<SearchBloodDonatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBloodDonatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBloodDonatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
