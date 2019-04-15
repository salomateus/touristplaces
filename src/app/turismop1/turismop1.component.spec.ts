import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Turismop1Component } from './turismop1.component';

describe('Turismop1Component', () => {
  let component: Turismop1Component;
  let fixture: ComponentFixture<Turismop1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Turismop1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Turismop1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
