import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Turismop2Component } from './turismop2.component';

describe('Turismop2Component', () => {
  let component: Turismop2Component;
  let fixture: ComponentFixture<Turismop2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Turismop2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Turismop2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
