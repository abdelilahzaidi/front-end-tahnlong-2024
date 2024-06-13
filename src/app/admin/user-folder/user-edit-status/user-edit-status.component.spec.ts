import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditStatusComponent } from './user-edit-status.component';

describe('UserEditStatusComponent', () => {
  let component: UserEditStatusComponent;
  let fixture: ComponentFixture<UserEditStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserEditStatusComponent]
    });
    fixture = TestBed.createComponent(UserEditStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
