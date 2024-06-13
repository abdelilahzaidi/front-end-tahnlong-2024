import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveauNewComponent } from './niveau-new.component';

describe('NiveauNewComponent', () => {
  let component: NiveauNewComponent;
  let fixture: ComponentFixture<NiveauNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NiveauNewComponent]
    });
    fixture = TestBed.createComponent(NiveauNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
