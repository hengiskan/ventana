import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditemploComponent } from './editemplo.component';

describe('EditemploComponent', () => {
  let component: EditemploComponent;
  let fixture: ComponentFixture<EditemploComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditemploComponent]
    });
    fixture = TestBed.createComponent(EditemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
