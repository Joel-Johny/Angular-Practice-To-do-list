import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfTestComponent } from './inf-test.component';

describe('InfTestComponent', () => {
  let component: InfTestComponent;
  let fixture: ComponentFixture<InfTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
