import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingPatientsComponent } from './pending-patients.component';

describe('PendingPatientsComponent', () => {
  let component: PendingPatientsComponent;
  let fixture: ComponentFixture<PendingPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingPatientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
