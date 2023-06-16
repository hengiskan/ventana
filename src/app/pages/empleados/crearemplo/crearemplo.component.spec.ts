import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearemploComponent } from './crearemplo.component';

describe('CrearemploComponent', () => {
  let component: CrearemploComponent;
  let fixture: ComponentFixture<CrearemploComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearemploComponent]
    });
    fixture = TestBed.createComponent(CrearemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
