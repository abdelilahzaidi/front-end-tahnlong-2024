import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LieuListComponent } from './lieu-list.component';

describe('LieuListComponent', () => {
  let component: LieuListComponent;
  let fixture: ComponentFixture<LieuListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LieuListComponent]
    });
    fixture = TestBed.createComponent(LieuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
