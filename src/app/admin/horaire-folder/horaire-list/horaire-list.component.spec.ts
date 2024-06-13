import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoraireListComponent } from './horaire-list.component';

describe('HoraireListComponent', () => {
  let component: HoraireListComponent;
  let fixture: ComponentFixture<HoraireListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoraireListComponent]
    });
    fixture = TestBed.createComponent(HoraireListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
