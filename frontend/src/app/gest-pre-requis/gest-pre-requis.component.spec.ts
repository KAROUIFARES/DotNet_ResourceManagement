import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestPreRequisComponent } from './gest-pre-requis.component';

describe('GestPreRequisComponent', () => {
  let component: GestPreRequisComponent;
  let fixture: ComponentFixture<GestPreRequisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestPreRequisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestPreRequisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
