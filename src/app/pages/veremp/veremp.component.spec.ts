import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerempComponent } from './veremp.component';

describe('VerempComponent', () => {
  let component: VerempComponent;
  let fixture: ComponentFixture<VerempComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerempComponent]
    });
    fixture = TestBed.createComponent(VerempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
