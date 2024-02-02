import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdderLogicComponent } from './adder-logic.component';

describe('AdderLogicComponent', () => {
  let component: AdderLogicComponent;
  let fixture: ComponentFixture<AdderLogicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdderLogicComponent]
    });
    fixture = TestBed.createComponent(AdderLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
