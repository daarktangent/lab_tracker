import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrossingStationComponent } from './grossing-station.component';

describe('GrossingStationComponent', () => {
  let component: GrossingStationComponent;
  let fixture: ComponentFixture<GrossingStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrossingStationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrossingStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
