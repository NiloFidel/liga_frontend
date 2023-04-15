import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalidadComponent } from './municipalidad.component';

describe('MunicipalidadComponent', () => {
  let component: MunicipalidadComponent;
  let fixture: ComponentFixture<MunicipalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MunicipalidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MunicipalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
