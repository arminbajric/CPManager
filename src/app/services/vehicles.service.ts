import { Injectable } from '@angular/core';

import * as vehicles from '../../assets/js/data/vehicles.json';
import * as reports from '../../assets/js/data/report.json';


@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor() { }

  getTotalNumberOfVehicles():number{

     return vehicles.list.length;    
  }
  getAvailableNumber():number{
    let avl=0;
    for(let i=0;i<vehicles.list.length;i++)
    {
      if(vehicles.list[i].available)
      {
        avl++;
      }
    }
    return avl;
  }
  getTruckNumber():number{
    let truck=0;
    for(let i=0;i<vehicles.list.length;i++)
    {
      if(vehicles.list[i].type=='Truck')
      {
        truck++;
      }
    }
    return truck;
  }
  getAvailableTruckNumbers():number{
    let avl=0;
    for(let i=0;i<vehicles.list.length;i++)
    {
      if(vehicles.list[i].type=="Truck" && vehicles.list[i].available)
      {
        avl++;
      }
    }
    return avl;
  }
  getCarsNumber():number{
    let car=0;
    for(let i=0;i<vehicles.list.length;i++)
    {
      if(vehicles.list[i].type=='Car')
      {
        car++;
      }
    }
    return car;
  }
  getAvailableCarsNumbers():number{
    let avl=0;
    for(let i=0;i<vehicles.list.length;i++)
    {
      if(vehicles.list[i].type=="Car" && vehicles.list[i].available)
      {
        avl++;
      }
    }
    return avl;
  }
  getVanNumber():number{
    let van=0;
    for(let i=0;i<vehicles.list.length;i++)
    {
      if(vehicles.list[i].type=='Van')
      {
        van++;
      }
    }
    return van;
  }
  getAvailableVansNumbers():number{
    let avl=0;
    for(let i=0;i<vehicles.list.length;i++)
    {
      if(vehicles.list[i].type=="Van" && vehicles.list[i].available)
      {
        avl++;
      }
    }
    return avl;
  }
  getMiniVanNumber():number{
    let mvan=0;
    for(let i=0;i<vehicles.list.length;i++)
    {
      if(vehicles.list[i].type=='Mini van')
      {
        mvan++;
      }
    }
    return mvan;
  }
  getAvailableMiniVansNumbers():number{
    let avl=0;
    for(let i=0;i<vehicles.list.length;i++)
    {
      if(vehicles.list[i].type=="Mini van" && vehicles.list[i].available)
      {
        avl++;
      }
    }
    return avl;
  }
  getBusNumber():number{
    let bus=0;
    for(let i=0;i<vehicles.list.length;i++)
    {
      if(vehicles.list[i].type=='Bus')
      {
        bus++;
      }
    }
    return bus;
  }
  getAvailableBusesNumbers():number{
    let avl=0;
    for(let i=0;i<vehicles.list.length;i++)
    {
      if(vehicles.list[i].type=="Bus" && vehicles.list[i].available)
      {
        avl++;
      }
    }
    return avl;
  }
  getHeavyNumber():number{
    let hm=0;
    for(let i=0;i<vehicles.list.length;i++)
    {
      if(vehicles.list[i].type=='Heavy machinery')
      {
        hm++;
      }
    }
    return hm;
  }
  getAvailableHeavyNumbers():number{
    let avl=0;
    for(let i=0;i<vehicles.list.length;i++)
    {
      if(vehicles.list[i].type=="Heavy machinery" && vehicles.list[i].available)
      {
        avl++;
      }
    }
    return avl;
  }
  actionService():number{
    let service=0;
    for(let i=0;i<vehicles.list.length;i++)
    {
      const diff=vehicles.list[i].services.nextFullService- vehicles.list[i].km;
      if(diff<1000)
      {
      service++;
    }
    }
    return service;
  }
  actionInsurance(){
    let exp=0;
    let today= new Date().getDate();
    let month= new Date().getMonth()+1;
    let year=new Date().getFullYear();
    for(let i=0;i<vehicles.list.length;i++)
    {
      const exMonth=Number(vehicles.list[i].legal.insuranceExp.substring(0,2));
      const exDay=Number(vehicles.list[i].legal.insuranceExp.substring(3,5));
      const exYear=Number(vehicles.list[i].legal.insuranceExp.substring(6,10));
      if(exYear==year && exMonth==month && (exDay-today)<21 || (exMonth-month==1 && exDay-today<21 && exDay-today>0 ) || (exMonth-month==1 && ((30-today)-exDay)>0))
      {
        exp++;
      }

    }
    return exp;
  }
  actionRegistration(){
    let exp=0;
    let today= new Date().getDate();
    let month= new Date().getMonth()+1;
    let year=new Date().getFullYear();
    for(let i=0;i<vehicles.list.length;i++)
    {
      const exMonth=Number(vehicles.list[i].legal.insuranceExp.substring(0,2));
      const exDay=Number(vehicles.list[i].legal.insuranceExp.substring(3,5));
      const exYear=Number(vehicles.list[i].legal.insuranceExp.substring(6,10));
      if(exYear==year && exMonth==month && (exDay-today)<21 || (exMonth-month==1 && exDay-today<21 && exDay-today>0 ) || (exMonth-month==1 && ((30-today)-exDay)>0))
      {
        exp++;
      }

    }
  
    return exp;
  }
  actionCleaning(){
    let exp=0;
    let today= new Date().getDate();
    let month= new Date().getMonth()+1;
    let year=new Date().getFullYear();
    for(let i=0;i<vehicles.list.length;i++)
    {
      
      const exMonth=Number(vehicles.list[i].services.nextCleaning.substring(0,2));
      const exDay=Number(vehicles.list[i].services.nextCleaning.substring(3,5));
      const exYear=Number(vehicles.list[i].services.nextCleaning.substring(6,10));
      console.log(month+'  '+today+ '  '+year)
      if(exYear==year && exMonth==month && (exDay-today)<7 || (exMonth-month==1 && exDay-today<7 && exDay-today>0 ) || (exMonth-month==1 && ((30-today)-exDay)>0&&((30-today)-exDay)<8))
      {
        exp++;
      }

    }
    return exp;
  }
  reports(){
    const unsolvedReports=[];
    for(let i=0;i<reports.report.length;i++)
    {
      if(reports.report[i].solved==false)
      {
        unsolvedReports.push(reports.report[i])
      }
    }
return unsolvedReports;
  }
  numberOfUnsolved(){
    let unsolvedReports=0;
    for(let i=0;i<reports.report.length;i++)
    {
      if(reports.report[i].solved==false)
      {
        unsolvedReports++
      }
    }
return unsolvedReports;
  }
  getServiceList(){
    let list=[];
    for(let i=0;i<vehicles.list.length;i++)
    {
      const diff=vehicles.list[i].services.nextFullService- vehicles.list[i].km;
      if(diff<1000)
      {
      list.push(vehicles.list[i]);
    }
    }
    return list;
  }
  getRegistrationList(){
    let list=[];
    let today= new Date().getDate();
    let month= new Date().getMonth()+1;
    let year=new Date().getFullYear();
    for(let i=0;i<vehicles.list.length;i++)
    {
      const exMonth=Number(vehicles.list[i].legal.registrationExp.substring(0,2));
      const exDay=Number(vehicles.list[i].legal.registrationExp.substring(3,5));
      const exYear=Number(vehicles.list[i].legal.registrationExp.substring(6,10));
      if(exYear==year && exMonth==month && (exDay-today)<21 || (exMonth-month==1 && exDay-today<21 && exDay-today>0 ) || (exMonth-month==1 && ((30-today)-exDay)>0))
      {
        list.push(vehicles.list[i]);
      }

    }
  
    return list;
  }
  getInsuranceList(){
    let list=[];
    let today= new Date().getDate();
    let month= new Date().getMonth()+1;
    let year=new Date().getFullYear();
    for(let i=0;i<vehicles.list.length;i++)
    {
      const exMonth=Number(vehicles.list[i].legal.insuranceExp.substring(0,2));
      const exDay=Number(vehicles.list[i].legal.insuranceExp.substring(3,5));
      const exYear=Number(vehicles.list[i].legal.insuranceExp.substring(6,10));
      if(exYear==year && exMonth==month && (exDay-today)<21 || (exMonth-month==1 && exDay-today<21 && exDay-today>0 ) || (exMonth-month==1 && ((30-today)-exDay)>0))
      {
        list.push(vehicles.list[i]);
      }

    }
  
    return list;
  }
  getCleaningList(){
    let list=[];
    let today= new Date().getDate();
    let month= new Date().getMonth()+1;
    let year=new Date().getFullYear();
    for(let i=0;i<vehicles.list.length;i++)
    {
      
      const exMonth=Number(vehicles.list[i].services.nextCleaning.substring(0,2));
      const exDay=Number(vehicles.list[i].services.nextCleaning.substring(3,5));
      const exYear=Number(vehicles.list[i].services.nextCleaning.substring(6,10));
      console.log(month+'  '+today+ '  '+year)
      if(exYear==year && exMonth==month && (exDay-today)<7 || (exMonth-month==1 && exDay-today<7 && exDay-today>0 ) || (exMonth-month==1 && ((30-today)-exDay)>0&&((30-today)-exDay)<8))
      {
        list.push(vehicles.list[i]);
      }


    }
    return list;
  }
  getOafServiceList(){

      let list=[];
      for(let i=0;i<vehicles.list.length;i++)
      {
        const diff=vehicles.list[i].services.nextOilAndFiltersChange- vehicles.list[i].km;
        if(diff<1000)
        {
        list.push(vehicles.list[i]);
      }
      }
      return list;
    }
    getListAvailable(){
      let list=[];
      for(let i=0;i<vehicles.list.length;i++)
      {
        if(vehicles.list[i].available)
        {
          list.push(vehicles.list[i]);
        }
      }
      return list;
    }
  
  }

