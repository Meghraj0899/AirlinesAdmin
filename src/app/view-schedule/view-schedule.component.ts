import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-view-schedule',
  templateUrl: './view-schedule.component.html',
  styleUrls: ['./view-schedule.component.css']
})
export class ViewScheduleComponent implements OnInit {
  schedules:any;
  constructor(private fServices:FlightService) { }

  ngOnInit(): void {
    this.fServices.getAllSchedules().subscribe((data:any)=>{
      this.schedules=data;
    })
  }

}
