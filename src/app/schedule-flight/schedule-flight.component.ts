import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { Schedule } from '../schedule';
import { ViewAllFlightsComponent } from '../view-all-flights/view-all-flights.component';
@Component({
  selector: 'app-schedule-flight',
  templateUrl: './schedule-flight.component.html',
  styleUrls: ['./schedule-flight.component.css']
})
export class ScheduleFlightComponent implements OnInit {
  schedule:Schedule;
  clickToSchedule:boolean=false;
  // vaF:ViewAllFlightsComponent;
  constructor(private sService:FlightService) {
    this.schedule=new Schedule();
   }

  ngOnInit(): void {
    // this.vaF.clickToSchedule=false;
  }
  saveSchedule(){
    console.log(this.schedule);
    this.sService.saveSchedule(this.schedule).subscribe(
      (data)=>{
         console.log("Returns value for REST"+data);
      }
    )
  }

}
