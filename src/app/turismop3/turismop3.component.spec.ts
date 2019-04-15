import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Turismop3Component } from './turismop3.component';

describe('Turismop3Component', () => {
  let component: Turismop3Component;
  let fixture: ComponentFixture<Turismop3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Turismop3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Turismop3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
