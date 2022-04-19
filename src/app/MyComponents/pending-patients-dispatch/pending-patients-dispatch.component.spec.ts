import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingPatientsDispatchComponent } from './pending-patients-dispatch.component';

describe('PendingPatientsDispatchComponent', () => {
  let component: PendingPatientsDispatchComponent;
  let fixture: ComponentFixture<PendingPatientsDispatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingPatientsDispatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingPatientsDispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
