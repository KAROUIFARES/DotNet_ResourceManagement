import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectEquipComponent } from './affect-equip.component';

describe('AffectEquipComponent', () => {
  let component: AffectEquipComponent;
  let fixture: ComponentFixture<AffectEquipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectEquipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffectEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
