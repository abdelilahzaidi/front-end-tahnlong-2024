import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageUserListComponent } from './message-user-list.component';

describe('MessageUserListComponent', () => {
  let component: MessageUserListComponent;
  let fixture: ComponentFixture<MessageUserListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageUserListComponent]
    });
    fixture = TestBed.createComponent(MessageUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
