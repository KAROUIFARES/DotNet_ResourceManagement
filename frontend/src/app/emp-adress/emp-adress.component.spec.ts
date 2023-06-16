import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpAdressComponent } from './emp-adress.component';

describe('EmpAdressComponent', () => {
  let component: EmpAdressComponent;
  let fixture: ComponentFixture<EmpAdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpAdressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
