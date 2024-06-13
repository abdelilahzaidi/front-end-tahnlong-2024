import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeanceNewComponent } from './seance-new.component';

describe('SeanceNewComponent', () => {
  let component: SeanceNewComponent;
  let fixture: ComponentFixture<SeanceNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeanceNewComponent]
    });
    fixture = TestBed.createComponent(SeanceNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
