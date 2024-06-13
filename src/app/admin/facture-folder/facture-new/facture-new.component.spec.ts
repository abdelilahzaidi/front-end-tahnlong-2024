import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureNewComponent } from './facture-new.component';

describe('FactureNewComponent', () => {
  let component: FactureNewComponent;
  let fixture: ComponentFixture<FactureNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FactureNewComponent]
    });
    fixture = TestBed.createComponent(FactureNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
