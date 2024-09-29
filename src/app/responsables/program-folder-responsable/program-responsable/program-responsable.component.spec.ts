import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramResponsableComponent } from './program-responsable.component';

describe('ProgramResponsableComponent', () => {
  let component: ProgramResponsableComponent;
  let fixture: ComponentFixture<ProgramResponsableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramResponsableComponent]
    });
    fixture = TestBed.createComponent(ProgramResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
