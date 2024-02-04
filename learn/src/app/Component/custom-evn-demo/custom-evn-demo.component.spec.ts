import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomEvnDemoComponent } from './custom-evn-demo.component';

describe('CustomEvnDemoComponent', () => {
  let component: CustomEvnDemoComponent;
  let fixture: ComponentFixture<CustomEvnDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomEvnDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomEvnDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
