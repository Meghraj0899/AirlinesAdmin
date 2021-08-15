import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  f:Flight;
  constructor(private fService:FlightService) {
    this.f=new Flight();
   }

  ngOnInit(): void {
  }
  saveData(){
      this.fService.addNewFlight(this.f).subscribe(
        (data)=>{
          console.log("Returns value for REST"+data);
        }
      )
   }

}
