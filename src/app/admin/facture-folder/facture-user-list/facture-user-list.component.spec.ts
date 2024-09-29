import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureUserListComponent } from './facture-user-list.component';

describe('FactureUserListComponent', () => {
  let component: FactureUserListComponent;
  let fixture: ComponentFixture<FactureUserListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FactureUserListComponent]
    });
    fixture = TestBed.createComponent(FactureUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
