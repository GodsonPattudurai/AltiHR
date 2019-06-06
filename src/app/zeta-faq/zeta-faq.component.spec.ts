import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZetaFaqComponent } from './zeta-faq.component';

describe('ZetaFaqComponent', () => {
  let component: ZetaFaqComponent;
  let fixture: ComponentFixture<ZetaFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZetaFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZetaFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
