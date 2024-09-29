import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilResponsableComponent } from './profil-responsable.component';

describe('ProfilResponsableComponent', () => {
  let component: ProfilResponsableComponent;
  let fixture: ComponentFixture<ProfilResponsableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilResponsableComponent]
    });
    fixture = TestBed.createComponent(ProfilResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
