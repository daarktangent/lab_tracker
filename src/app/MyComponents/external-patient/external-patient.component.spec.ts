import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalPatientComponent } from './external-patient.component';

describe('ExternalPatientComponent', () => {
  let component: ExternalPatientComponent;
  let fixture: ComponentFixture<ExternalPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
