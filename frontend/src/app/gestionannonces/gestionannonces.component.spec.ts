import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionannoncesComponent } from './gestionannonces.component';

describe('GestionannoncesComponent', () => {
  let component: GestionannoncesComponent;
  let fixture: ComponentFixture<GestionannoncesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionannoncesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionannoncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
