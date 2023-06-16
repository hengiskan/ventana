import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeremploComponent } from './veremplo.component';

describe('VeremploComponent', () => {
  let component: VeremploComponent;
  let fixture: ComponentFixture<VeremploComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeremploComponent]
    });
    fixture = TestBed.createComponent(VeremploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
