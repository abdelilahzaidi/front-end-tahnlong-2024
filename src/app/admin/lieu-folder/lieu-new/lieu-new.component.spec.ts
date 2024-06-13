import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LieuNewComponent } from './lieu-new.component';

describe('LieuNewComponent', () => {
  let component: LieuNewComponent;
  let fixture: ComponentFixture<LieuNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LieuNewComponent]
    });
    fixture = TestBed.createComponent(LieuNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
