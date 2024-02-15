import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsVsproComponent } from './obs-vspro.component';

describe('ObsVsproComponent', () => {
  let component: ObsVsproComponent;
  let fixture: ComponentFixture<ObsVsproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObsVsproComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObsVsproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
