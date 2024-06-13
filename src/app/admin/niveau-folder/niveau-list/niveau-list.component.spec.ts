import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveauListComponent } from './niveau-list.component';

describe('NiveauListComponent', () => {
  let component: NiveauListComponent;
  let fixture: ComponentFixture<NiveauListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NiveauListComponent]
    });
    fixture = TestBed.createComponent(NiveauListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
