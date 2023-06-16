import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestUserComponent } from './gest-user.component';

describe('GestUserComponent', () => {
  let component: GestUserComponent;
  let fixture: ComponentFixture<GestUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
