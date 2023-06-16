import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRessComponent } from './add-ress.component';

describe('AddRessComponent', () => {
  let component: AddRessComponent;
  let fixture: ComponentFixture<AddRessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
