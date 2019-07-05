import { Component, OnInit } from '@angular/core';
import { ManagementService } from 'src/app/services/management.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
lastestRequest:any;
otherRequestList:any;
index:any;
i:any;
meeting:FormGroup;
meetingsList:any;
resourcesList:any;
  constructor(private management:ManagementService) { }

  ngOnInit() {
    this.meeting=new FormGroup({
      title:new FormControl('',Validators.required),
      description:new FormControl('',Validators.required),
      date:new FormControl('',Validators.required),
      office:new FormControl('',Validators.required)
    })
    this.otherRequestList=this.management.getOtherRequests();
    this.index=this.otherRequestList.length-1;
    this.i=this.management.getUpcomingMeetingIndex();
    this.meetingsList=this.management.getAllMeetings();
    this.resourcesList=this.management.getResourcesList();
   
  }
  showRequest(event){
    this.index=event.target.id;
  }
  showMeeting(event){
    this.i=event.target.id;
  }
  resolveRequest(){
   this.otherRequestList.splice(this.index)
   
    this.index=this.otherRequestList.length-1;
   
  }
  saveMeeting(){}
}
