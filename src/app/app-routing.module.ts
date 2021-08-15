import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { AdminModuleComponent } from './admin-module/admin-module.component';
import { RemoveFlightScheduleComponent } from './remove-flight-schedule/remove-flight-schedule.component';
import { RemoveFlightComponent } from './remove-flight/remove-flight.component';
import { ScheduleFlightComponent } from './schedule-flight/schedule-flight.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { ViewAllFlightsComponent } from './view-all-flights/view-all-flights.component';
import { ViewScheduleComponent } from './view-schedule/view-schedule.component';

const routes: Routes = [
  {path:'AdminModule',component:AdminModuleComponent},
  {path:'AddFlight',component:AddFlightComponent},
  {path:'UpdateFlight',component:UpdateFlightComponent},
  {path:'RemoveFlight',component:RemoveFlightComponent},
  {path:'ViewAllFlights',component:ViewAllFlightsComponent
},
  {path:'ViewAllSchedules',component:ViewScheduleComponent},
  {path:'RemoveSchedule',component:RemoveFlightScheduleComponent},
  {path:'AddSchedule',component:ScheduleFlightComponent},
  {path:"RemoveSchedule",component:RemoveFlightScheduleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
