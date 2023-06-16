import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerdepComponent } from './verdep.component';

describe('VerdepComponent', () => {
  let component: VerdepComponent;
  let fixture: ComponentFixture<VerdepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerdepComponent]
    });
    fixture = TestBed.createComponent(VerdepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
