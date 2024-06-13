import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighBarreResponsableComponent } from './high-barre-responsable.component';

describe('HighBarreResponsableComponent', () => {
  let component: HighBarreResponsableComponent;
  let fixture: ComponentFixture<HighBarreResponsableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighBarreResponsableComponent]
    });
    fixture = TestBed.createComponent(HighBarreResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
