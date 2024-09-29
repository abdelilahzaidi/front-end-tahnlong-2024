import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureAssignComponent } from './facture-assign.component';

describe('FactureAssignComponent', () => {
  let component: FactureAssignComponent;
  let fixture: ComponentFixture<FactureAssignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FactureAssignComponent]
    });
    fixture = TestBed.createComponent(FactureAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
