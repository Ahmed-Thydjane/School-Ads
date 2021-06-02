import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestiontoutesannoncesComponent } from './gestiontoutesannonces.component';

describe('GestiontoutesannoncesComponent', () => {
  let component: GestiontoutesannoncesComponent;
  let fixture: ComponentFixture<GestiontoutesannoncesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestiontoutesannoncesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestiontoutesannoncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
