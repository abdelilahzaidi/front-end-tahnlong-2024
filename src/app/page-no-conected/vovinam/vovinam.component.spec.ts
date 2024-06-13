import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VovinamComponent } from './vovinam.component';

describe('VovinamComponent', () => {
  let component: VovinamComponent;
  let fixture: ComponentFixture<VovinamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VovinamComponent]
    });
    fixture = TestBed.createComponent(VovinamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
