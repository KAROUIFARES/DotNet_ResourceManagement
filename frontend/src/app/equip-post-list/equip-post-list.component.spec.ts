import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipPostListComponent } from './equip-post-list.component';

describe('EquipPostListComponent', () => {
  let component: EquipPostListComponent;
  let fixture: ComponentFixture<EquipPostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipPostListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
