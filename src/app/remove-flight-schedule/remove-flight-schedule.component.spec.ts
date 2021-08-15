import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveFlightScheduleComponent } from './remove-flight-schedule.component';

describe('RemoveFlightScheduleComponent', () => {
  let component: RemoveFlightScheduleComponent;
  let fixture: ComponentFixture<RemoveFlightScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveFlightScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveFlightScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
