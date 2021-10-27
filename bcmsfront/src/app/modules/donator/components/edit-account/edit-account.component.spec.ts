import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAccountComponent } from './edit-account.component';

describe('EditAccountComponent', () => {
  let component: EditAccountComponent;
  let fixture: ComponentFixture<EditAccountComponent>;
  let clickEmitter: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditAccountComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    clickEmitter = spyOn(component.editClicked, 'emit');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should v alues...', () => {
    expect(component.editClicked).toBeDefined();
  })

  it('should emit after click', () => {
    component.onEditClicked();
    expect(clickEmitter).toHaveBeenCalledWith();
  });
});
