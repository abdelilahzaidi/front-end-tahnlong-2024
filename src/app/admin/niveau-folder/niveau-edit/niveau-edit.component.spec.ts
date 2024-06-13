import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveauEditComponent } from './niveau-edit.component';

describe('NiveauEditComponent', () => {
  let component: NiveauEditComponent;
  let fixture: ComponentFixture<NiveauEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NiveauEditComponent]
    });
    fixture = TestBed.createComponent(NiveauEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
