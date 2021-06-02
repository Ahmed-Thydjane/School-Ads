import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoyercandidatureComponent } from './envoyercandidature.component';

describe('EnvoyercandidatureComponent', () => {
  let component: EnvoyercandidatureComponent;
  let fixture: ComponentFixture<EnvoyercandidatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvoyercandidatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvoyercandidatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
