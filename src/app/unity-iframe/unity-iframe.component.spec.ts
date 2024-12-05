import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnityIframeComponent } from './unity-iframe.component';

describe('UnityIframeComponent', () => {
  let component: UnityIframeComponent;
  let fixture: ComponentFixture<UnityIframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnityIframeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnityIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
