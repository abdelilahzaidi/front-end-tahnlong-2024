import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenceValidateComponent } from './presence-validate.component';

describe('PresenceValidateComponent', () => {
  let component: PresenceValidateComponent;
  let fixture: ComponentFixture<PresenceValidateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresenceValidateComponent]
    });
    fixture = TestBed.createComponent(PresenceValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
