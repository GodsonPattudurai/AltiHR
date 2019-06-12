import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfOptionsComponent } from './pf-options.component';

describe('PfOptionsComponent', () => {
  let component: PfOptionsComponent;
  let fixture: ComponentFixture<PfOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
