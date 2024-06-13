import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateCourListComponent } from './date-cour-list.component';

describe('DateCourListComponent', () => {
  let component: DateCourListComponent;
  let fixture: ComponentFixture<DateCourListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DateCourListComponent]
    });
    fixture = TestBed.createComponent(DateCourListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
