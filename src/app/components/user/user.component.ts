import { Component, OnInit } from '@angular/core';
import { VehiclesService } from 'src/app/services/vehicles.service';
import { ManagementService } from 'src/app/services/management.service';
import { Event } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
avlList:any;
reportsList:any;
meeting:any;
  constructor(private vehicles:VehiclesService,private management:ManagementService) { }

  ngOnInit() {
this.avlList=this.vehicles.getListAvailable();
this.reportsList=this.vehicles.reports();
this.meeting=this.management.getUpcomingMeeting();
  }
reportSolved(event:HTMLElement){
  const i=event.id
 console.log(i)
  this.reportsList.splice(i);
}
}
