import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreardepComponent } from './creardep.component';

describe('CreardepComponent', () => {
  let component: CreardepComponent;
  let fixture: ComponentFixture<CreardepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreardepComponent]
    });
    fixture = TestBed.createComponent(CreardepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
