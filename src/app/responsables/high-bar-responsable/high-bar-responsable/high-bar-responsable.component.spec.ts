import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighBarResponsableComponent } from './high-bar-responsable.component';

describe('HighBarResponsableComponent', () => {
  let component: HighBarResponsableComponent;
  let fixture: ComponentFixture<HighBarResponsableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighBarResponsableComponent]
    });
    fixture = TestBed.createComponent(HighBarResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
