import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdstDescuentoComponent } from './adst-descuento.component';

describe('AdstDescuentoComponent', () => {
  let component: AdstDescuentoComponent;
  let fixture: ComponentFixture<AdstDescuentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdstDescuentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdstDescuentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
