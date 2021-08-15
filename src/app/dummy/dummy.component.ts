import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FlightService } from '../flight.service';
import { Schedule } from '../schedule';
@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {
  var:boolean=false;
  schedule:Schedule;
  // vaF:ViewAllFlightsComponent;
  constructor(private sService:FlightService) {
    this.var=false;
    this.schedule=new Schedule();
   }

  ngOnInit(): void {
    // this.vaF.clickToSchedule=false;
  }
  saveSchedule(){
    console.log(this.schedule);
    this.sService.saveSchedule(this.schedule).subscribe(
      (data:any)=>{
         console.log("Returns value for REST"+data);
      }
    )
  }
  toggle(){
    this.var=true;
  }
}
