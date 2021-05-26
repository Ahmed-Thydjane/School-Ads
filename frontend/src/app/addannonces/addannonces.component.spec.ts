import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddannoncesComponent } from './addannonces.component';

describe('AddannoncesComponent', () => {
  let component: AddannoncesComponent;
  let fixture: ComponentFixture<AddannoncesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddannoncesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddannoncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
