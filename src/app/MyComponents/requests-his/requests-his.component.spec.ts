import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsHISComponent } from './requests-his.component';

describe('RequestsHISComponent', () => {
  let component: RequestsHISComponent;
  let fixture: ComponentFixture<RequestsHISComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestsHISComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestsHISComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
