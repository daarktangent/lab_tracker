import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingSamplesComponent } from './pending-samples.component';

describe('PendingSamplesComponent', () => {
  let component: PendingSamplesComponent;
  let fixture: ComponentFixture<PendingSamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingSamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
