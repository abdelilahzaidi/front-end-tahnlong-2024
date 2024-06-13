import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighBarreComponent } from './high-barre.component';

describe('HighBarreComponent', () => {
  let component: HighBarreComponent;
  let fixture: ComponentFixture<HighBarreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighBarreComponent]
    });
    fixture = TestBed.createComponent(HighBarreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
