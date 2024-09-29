import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageUserCreateComponent } from './message-user-create.component';

describe('MessageUserCreateComponent', () => {
  let component: MessageUserCreateComponent;
  let fixture: ComponentFixture<MessageUserCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageUserCreateComponent]
    });
    fixture = TestBed.createComponent(MessageUserCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
