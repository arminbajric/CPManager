import { Component, OnInit } from '@angular/core';
import { GarageService } from 'src/app/services/garage.service';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
vehicles:any;
reports:any;
insuranceList:any;
registrationList:any;
cleaningList:any;
serviceList:any;
oafServiceList:any;
  constructor(private vehiclesService:VehiclesService) { }

  ngOnInit() {
  this.vehicles=VehiclesService.prototype;
   this.reports=this.vehiclesService.reports();
   this.insuranceList=this.vehiclesService.getInsuranceList();
   this.registrationList=this.vehiclesService.getRegistrationList();
   this.cleaningList=this.vehiclesService.getCleaningList();
   this.serviceList=this.vehiclesService.getServiceList();
   this.oafServiceList=this.vehiclesService.getOafServiceList();
  }
 
}
