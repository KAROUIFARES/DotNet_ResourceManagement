import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GereEmpEquipComponent } from './gere-emp-equip.component';

describe('GereEmpEquipComponent', () => {
  let component: GereEmpEquipComponent;
  let fixture: ComponentFixture<GereEmpEquipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GereEmpEquipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GereEmpEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
