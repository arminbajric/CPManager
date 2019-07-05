import { Injectable } from '@angular/core';
import * as requests from '../../assets/js/data/requests.json';
import * as meetings from '../../assets/js/data/meeting.json';
import * as resources from '../../assets/js/data/resources.json'
@Injectable({
  providedIn: 'root'
})
export class ManagementService {

  constructor() { }

  getLastestRequest() {
    let last = [];
    for (let i = requests.list.length - 1; i >= 0; i--) {
      if (requests.list[i].resolved == false) {
        last.push(requests.list[i]);
        break;
      }
    }
    return last;
  }
  getOtherRequests() {
    let list = [];
    for (let i = requests.list.length - 1; i >= 0; i--) {
      if (requests.list[i].resolved == false) {
        list.push(requests.list[i]);

      }
    }
    return list;
  }
  getUpcomingMeetingIndex() {
    let up = meetings.list[0];
    let c=0;
    for (let  i = 1; i < meetings.list.length; i++) {
      if (Number(up.date.substring(6, 10)) < Number(meetings.list[i].date.substring(6, 10))) {
        if (Number(up.date.substring(3, 5)) < Number(meetings.list[i].date.substring(3, 5))) {
          if (Number(up.date.substring(0, 2)) < Number(meetings.list[i].date.substring(0, 2))) {
            up = meetings.list[i];
            c=i;
          }
        }
      }
    }
    return c;
  }
  getAllMeetings(){
    return meetings.list;
  }
  getResourcesList(){
    return resources.list;
  }
  getUpcomingMeeting(){
    let up = meetings.list[0];
    
    for (let  i = 1; i < meetings.list.length; i++) {
      if (Number(up.date.substring(6, 10)) < Number(meetings.list[i].date.substring(6, 10))) {
        if (Number(up.date.substring(3, 5)) < Number(meetings.list[i].date.substring(3, 5))) {
          if (Number(up.date.substring(0, 2)) < Number(meetings.list[i].date.substring(0, 2))) {
            up = meetings.list[i];
          
          }
        }
      }
    }
    return up;
  }
}

