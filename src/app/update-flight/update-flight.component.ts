import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-update-flight',
  templateUrl: './update-flight.component.html',
  styleUrls: ['./update-flight.component.css']
})
export class UpdateFlightComponent implements OnInit {

  f:Flight;
  constructor(private fService:FlightService) {
    this.f=new Flight();
   }

  ngOnInit(): void {
  }
  saveData(){
      this.fService.updateFlight(this.f).subscribe(
        (data)=>{
          console.log("Returns value for REST"+data);
        }
      )
   }

}
