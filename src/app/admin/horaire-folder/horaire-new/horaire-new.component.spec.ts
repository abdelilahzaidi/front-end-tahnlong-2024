import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoraireNewComponent } from './horaire-new.component';

describe('HoraireNewComponent', () => {
  let component: HoraireNewComponent;
  let fixture: ComponentFixture<HoraireNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoraireNewComponent]
    });
    fixture = TestBed.createComponent(HoraireNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
