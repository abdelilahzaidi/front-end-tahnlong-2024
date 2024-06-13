import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramNewComponent } from './program-new.component';

describe('ProgramNewComponent', () => {
  let component: ProgramNewComponent;
  let fixture: ComponentFixture<ProgramNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramNewComponent]
    });
    fixture = TestBed.createComponent(ProgramNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
