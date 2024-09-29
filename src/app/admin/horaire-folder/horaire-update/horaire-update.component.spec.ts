import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoraireUpdateComponent } from './horaire-update.component';

describe('HoraireUpdateComponent', () => {
  let component: HoraireUpdateComponent;
  let fixture: ComponentFixture<HoraireUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoraireUpdateComponent]
    });
    fixture = TestBed.createComponent(HoraireUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
