import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpPostComponent } from './emp-post.component';

describe('EmpPostComponent', () => {
  let component: EmpPostComponent;
  let fixture: ComponentFixture<EmpPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
