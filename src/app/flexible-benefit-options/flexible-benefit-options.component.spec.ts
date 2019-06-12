import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexibleBenefitOptionsComponent } from './flexible-benefit-options.component';

describe('FlexibleBenefitOptionsComponent', () => {
  let component: FlexibleBenefitOptionsComponent;
  let fixture: ComponentFixture<FlexibleBenefitOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexibleBenefitOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexibleBenefitOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
