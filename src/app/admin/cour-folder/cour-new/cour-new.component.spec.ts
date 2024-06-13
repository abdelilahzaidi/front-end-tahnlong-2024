import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourNewComponent } from './cour-new.component';

describe('CourNewComponent', () => {
  let component: CourNewComponent;
  let fixture: ComponentFixture<CourNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourNewComponent]
    });
    fixture = TestBed.createComponent(CourNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
