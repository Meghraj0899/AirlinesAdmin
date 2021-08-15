import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModuleComponent } from './admin-module/admin-module.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { RemoveFlightComponent } from './remove-flight/remove-flight.component';
import { ViewAllFlightsComponent } from './view-all-flights/view-all-flights.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ScheduleFlightComponent } from './schedule-flight/schedule-flight.component';
import { ViewScheduleComponent } from './view-schedule/view-schedule.component';
import { DummyComponent } from './dummy/dummy.component';
import { RemoveFlightScheduleComponent } from './remove-flight-schedule/remove-flight-schedule.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminModuleComponent,
    AddFlightComponent,
    UpdateFlightComponent,
    RemoveFlightComponent,
    ViewAllFlightsComponent,
    ScheduleFlightComponent,
    ViewScheduleComponent,
    DummyComponent,
    RemoveFlightScheduleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  clickToSchedule:boolean=false;
 }
