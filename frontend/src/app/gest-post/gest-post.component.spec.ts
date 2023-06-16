import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestPostComponent } from './gest-post.component';

describe('GestPostComponent', () => {
  let component: GestPostComponent;
  let fixture: ComponentFixture<GestPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
