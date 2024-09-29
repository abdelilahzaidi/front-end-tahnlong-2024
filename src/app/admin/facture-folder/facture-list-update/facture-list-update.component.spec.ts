import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureListUpdateComponent } from './facture-list-update.component';

describe('FactureListUpdateComponent', () => {
  let component: FactureListUpdateComponent;
  let fixture: ComponentFixture<FactureListUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FactureListUpdateComponent]
    });
    fixture = TestBed.createComponent(FactureListUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
