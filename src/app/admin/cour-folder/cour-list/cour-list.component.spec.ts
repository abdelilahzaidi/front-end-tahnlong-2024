import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourListComponent } from './cour-list.component';

describe('CourListComponent', () => {
  let component: CourListComponent;
  let fixture: ComponentFixture<CourListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourListComponent]
    });
    fixture = TestBed.createComponent(CourListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
