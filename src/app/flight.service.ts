import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flight } from './flight';
import { Schedule } from './schedule';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private httpClient:HttpClient) { }
  baseUrl:string="http://localhost:9898/flightRest/api";
  scheduleUrl:string="http://localhost:9898/flightSchedule/api";
  getAllFlights(){
    return this.httpClient.get(this.baseUrl+"/flights");
  }
  addNewFlight(flight:Flight){
    return this.httpClient.post(this.baseUrl+"/flights",flight);
  }
  updateFlight(flight:Flight){
    return this.httpClient.put(this.baseUrl+"/flights",flight);
  }
   removeFlight(fn:string){
      return this.httpClient.delete(this.baseUrl+"/flights/"+fn);
    }
    saveSchedule(fs:Schedule){
      console.log(fs);
      return this.httpClient.post(this.scheduleUrl+"/schedule",fs);
     }
     getAllSchedules(){
       return this.httpClient.get("http://localhost:9898/flightSchedule/api/schedule");
     }
     removeFlightSchedule(fn:number){
      return this.httpClient.delete(this.scheduleUrl+"/schedule/"+fn);
    }
}
