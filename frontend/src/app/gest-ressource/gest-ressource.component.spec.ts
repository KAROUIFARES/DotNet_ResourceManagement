import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestRessourceComponent } from './gest-ressource.component';

describe('GestRessourceComponent', () => {
  let component: GestRessourceComponent;
  let fixture: ComponentFixture<GestRessourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestRessourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestRessourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
