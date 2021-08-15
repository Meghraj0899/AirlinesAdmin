import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-remove-flight-schedule',
  templateUrl: './remove-flight-schedule.component.html',
  styleUrls: ['./remove-flight-schedule.component.css']
})
export class RemoveFlightScheduleComponent implements OnInit {
  flightScheduleNo:number=0;
  constructor(private fService:FlightService) { }

  ngOnInit(): void {
  }
  removeFlightSchedule(){
    console.log(this.flightScheduleNo);
    this.fService.removeFlightSchedule(this.flightScheduleNo).subscribe(
      (data)=>{
        console.log("Returns value for REST"+data);
      }
    );
  }

}
