import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighBarreMemberComponent } from './high-barre-member.component';

describe('HighBarreMemberComponent', () => {
  let component: HighBarreMemberComponent;
  let fixture: ComponentFixture<HighBarreMemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighBarreMemberComponent]
    });
    fixture = TestBed.createComponent(HighBarreMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
