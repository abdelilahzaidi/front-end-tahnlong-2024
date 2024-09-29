import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighBarUserComponent } from './high-bar-user.component';

describe('HighBarUserComponent', () => {
  let component: HighBarUserComponent;
  let fixture: ComponentFixture<HighBarUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighBarUserComponent]
    });
    fixture = TestBed.createComponent(HighBarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
