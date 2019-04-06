import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizacionDComponent } from './actualizacion-d.component';

describe('ActualizacionDComponent', () => {
  let component: ActualizacionDComponent;
  let fixture: ComponentFixture<ActualizacionDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizacionDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizacionDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
