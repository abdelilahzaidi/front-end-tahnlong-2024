import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighBarreResponsablesComponent } from './high-barre-responsables.component';

describe('HighBarreResponsablesComponent', () => {
  let component: HighBarreResponsablesComponent;
  let fixture: ComponentFixture<HighBarreResponsablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighBarreResponsablesComponent]
    });
    fixture = TestBed.createComponent(HighBarreResponsablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
