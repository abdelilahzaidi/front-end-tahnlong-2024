import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LieuEditComponent } from './lieu-edit.component';

describe('LieuEditComponent', () => {
  let component: LieuEditComponent;
  let fixture: ComponentFixture<LieuEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LieuEditComponent]
    });
    fixture = TestBed.createComponent(LieuEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
