import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-remove-flight',
  templateUrl: './remove-flight.component.html',
  styleUrls: ['./remove-flight.component.css']
})
export class RemoveFlightComponent implements OnInit {
  ID:string="";
  status:string="";
  constructor(private fService:FlightService) {
    this.ID="";
   }

  ngOnInit(): void {
  }
  removeFlight(){
    console.log(this.ID);
    this.fService.removeFlight(this.ID).subscribe(
      (data)=>{
        console.log("Returns value for REST"+data);
      }
    );
  }

}
