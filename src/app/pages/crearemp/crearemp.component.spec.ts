import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearempComponent } from './crearemp.component';

describe('CrearempComponent', () => {
  let component: CrearempComponent;
  let fixture: ComponentFixture<CrearempComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearempComponent]
    });
    fixture = TestBed.createComponent(CrearempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
