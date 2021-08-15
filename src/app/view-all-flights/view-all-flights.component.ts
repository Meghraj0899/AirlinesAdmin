import { Component, Input, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';
import { Schedule } from '../schedule';
@Component({
  selector: 'app-view-all-flights',
  templateUrl: './view-all-flights.component.html',
  styleUrls: ['./view-all-flights.component.css']
})
export class ViewAllFlightsComponent implements OnInit {
   clickToSchedule:Array<boolean>=[];
   schedules:Schedule;
  flights:any;
  constructor(private fService:FlightService) {
    this.schedules=new Schedule();
   }
  ngOnInit(): void {
    this.fService.getAllFlights().subscribe((data:any)=>{
      // console.log(this.f);
      this.flights=data;
    })
  }
  // schedule(i:number,num:number,fls:Flight){
  //   for(let j=0;j<num;j++){
  //     if(i==j){ this.clickToSchedule[j]=true;
  //       this.schedules.flight_number=fls.flight_no;
  //     }
  //     else{this.clickToSchedule[j]=false;}
  //   }
  //   console.log(num);
  //   console.log(this.clickToSchedule);
  // }
  attach(fls:Flight){
    this.schedules=new Schedule();
    this.schedules.flight_number=fls.flight_no;
  }
  saveSchedule(){
   // console.log(this.schedule);
    this.fService.saveSchedule(this.schedules).subscribe(
      (data)=>{
         console.log("Returns value for REST"+data);
      }
    )
  }
}
