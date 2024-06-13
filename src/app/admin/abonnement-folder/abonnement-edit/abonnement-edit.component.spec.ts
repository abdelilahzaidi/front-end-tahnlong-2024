import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonnementEditComponent } from './abonnement-edit.component';

describe('AbonnementEditComponent', () => {
  let component: AbonnementEditComponent;
  let fixture: ComponentFixture<AbonnementEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbonnementEditComponent]
    });
    fixture = TestBed.createComponent(AbonnementEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
