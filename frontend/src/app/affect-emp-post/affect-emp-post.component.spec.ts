import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectEmpPostComponent } from './affect-emp-post.component';

describe('AffectEmpPostComponent', () => {
  let component: AffectEmpPostComponent;
  let fixture: ComponentFixture<AffectEmpPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectEmpPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffectEmpPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
