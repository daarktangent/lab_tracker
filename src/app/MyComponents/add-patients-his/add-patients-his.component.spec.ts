import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatientsHISComponent } from './add-patients-his.component';

describe('AddPatientsHISComponent', () => {
  let component: AddPatientsHISComponent;
  let fixture: ComponentFixture<AddPatientsHISComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPatientsHISComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPatientsHISComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
