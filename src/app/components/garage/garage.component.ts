import { Component, OnInit } from '@angular/core';
import { GarageService } from 'src/app/services/garage.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VehiclesService } from 'src/app/services/vehicles.service';
import { ManagementService } from 'src/app/services/management.service';


declare var setSelected:Function;
@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css']
})
export class GarageComponent implements OnInit {
  list: any;
  category: any;
  categoryList:any;
  index: number;
  actions:boolean;
  issues:boolean;
  cat:FormGroup;
  filters:FormGroup;
  message:any;
  newVehicle:FormGroup;
  editVehicle:FormGroup;
  registrationList:any;
  insuranceList:any;
  serviceList:any;
  oafList:any;
  cleaningList:any;
  role:any;
  reportsList:any;
  constructor(private garage: GarageService,private vehicle:VehiclesService,private management:ManagementService) { }

  ngOnInit() {
    this.role=localStorage.getItem('CPMrole')
    this.reportsList=this.vehicle.reports();
  this.registrationList=this.vehicle.getRegistrationList();
  this.insuranceList=this.vehicle.getInsuranceList();
  this.serviceList=this.vehicle.getServiceList();
  this.oafList=this.vehicle.getOafServiceList();
  this.cleaningList=this.vehicle.getCleaningList();
    this.cat=new FormGroup({
      selected:new FormControl(''),
      vehicle:new FormControl('')
    })
    this.filters=new FormGroup({
      fuel:new FormControl(''),
      available:new FormControl('')
    })
    this.newVehicle=new FormGroup({
      regPlates:new FormControl('',Validators.required),
      manufacturer:new FormControl('',Validators.required),
      model:new FormControl('',Validators.required),
      type:new FormControl('',Validators.required),
      color:new FormControl('',Validators.required),
      produced:new FormControl('',Validators.required),
      seats:new FormControl(''),
      doors:new FormControl(''),
      workhours:new FormControl(''),
      km:new FormControl(''),
      load:new FormControl(''),
      fuel:new FormControl('',Validators.required),
      modelm:new FormControl(''),
      volume:new FormControl(''),
      hp:new FormControl(''),
      registrationExp:new FormControl('',Validators.required),
      insuranceExp:new FormControl('',Validators.required),
      nextFullService:new FormControl('',Validators.required),
      nextOilAndFiltersChange:new FormControl('',Validators.required),
      nextCleaning:new FormControl('',Validators.required),

      
    })
    this.editVehicle=new FormGroup({
      regPlates:new FormControl('',Validators.required),
      manufacturer:new FormControl('',Validators.required),
      model:new FormControl('',Validators.required),
      type:new FormControl('',Validators.required),
      color:new FormControl('',Validators.required),
      produced:new FormControl('',Validators.required),
      seats:new FormControl(''),
      doors:new FormControl(''),
      workhours:new FormControl(''),
      km:new FormControl(''),
      load:new FormControl(''),
      fuel:new FormControl('',Validators.required),
      modelm:new FormControl(''),
      volume:new FormControl(''),
      hp:new FormControl(''),
      registrationExp:new FormControl('',Validators.required),
      insuranceExp:new FormControl('',Validators.required),
      nextFullService:new FormControl('',Validators.required),
      nextOilAndFiltersChange:new FormControl('',Validators.required),
      nextCleaning:new FormControl('',Validators.required),

      
    })
    this.index = 0;
    this.list = this.garage.getVehiclesInfo();
    this.category = this.garage.getCategoryList();
    console.log(this.category)
    if(this.list[this.index].issues)
    {
      this.issues=true;
    }
    else{
      this.issues=false;
    }
  }
  switchNext() {
    if (this.index == this.list.length - 1) {
      this.index = 0;
    }
    else {
      this.index++;
    }
    if(this.list[this.index].issues)
    {
      this.issues=true;
    }
    else{
      this.issues=false;
    }
  }
  switchPrevious() {
    if (this.index == 0) {
      this.index = this.list.length - 1;
    }
    else {
      this.index--;
    }
    if(this.list[this.index].issues)
    {
      this.issues=true;
    }
    else{
      this.issues=false;
    }
  }
  setCategory(cat) {
    if(cat=='Issues')
    {
      this.list=this.garage.getAllWithIssues();
    }
    else{
    this.index = 0;
    this.list = this.garage.allByCategory(cat);
    console.log(this.list)
  }
  }
  listByCategory(){
    
   this.categoryList=this.garage.getByCategory(this.cat.get('selected').value);
   console.log(this.categoryList);
  }
  getVehicle(event){
    let id=(event.target.id)
   for(let i=0;i<this.list.length;i++)
   {
     if(this.list[i].regPlates==id)
     {
       this.index=i;
     }
   }
  
    setSelected(id,'buttonList');
  }
  doFilter(){
    let temp=[];
    let avl;
    if(String(this.filters.get('available').value).toLowerCase()=='yes')
    {
    avl=true;
    }
    else{
      avl=false;
    }
    if(this.filters.get('fuel').value!='')
    {
     
      for(let i=0;i<this.list.length;i++)
      {
        if(this.list[i].motor.fuel==String(this.filters.get('fuel').value).toLowerCase())
        {
          temp.push(this.list[i])
        }
      }
     
    }
    else if(this.filters.get('available').value!='')
    {
      for(let i=0;i<this.list.length;i++)
      {
        if(this.list[i].available==avl)
        {
          temp.push(this.list[i])
        }
      }
     
    }
    else if(this.filters.get('fuel').value!='' && this.filters.get('available').value!=''){
      for(let i=0;i<this.list.length;i++)
      {
        if(this.list[i].available==avl && this.list[i].motor.fuel==String(this.filters.get('fuel').value).toLowerCase())
        {
          temp.push(this.list[i])
        }
      }
     
    }
    if(temp[0])
    {
      this.message=""
    this.list=temp;
  }
  else{
    this.message="No results!"
  }
  }
  save(){
   this.garage.saveVehicle(this.newVehicle)
  }
  update(){
    
  }
  fillFormData(){
    const vehicle=this.list[this.index];
  
    this.editVehicle=new FormGroup({
      regPlates:new FormControl(vehicle.regPlates,Validators.required),
      manufacturer:new FormControl(vehicle.manufacturer,Validators.required),
      model:new FormControl(vehicle.model,Validators.required),
      type:new FormControl(vehicle.type,Validators.required),
      color:new FormControl(vehicle.color,Validators.required),
      produced:new FormControl(vehicle.produced,Validators.required),
      seats:new FormControl(vehicle.seats),
      doors:new FormControl(vehicle.doors),
      workhours:new FormControl(vehicle.workhours),
      km:new FormControl(vehicle.km),
      load:new FormControl(vehicle.load),
      fuel:new FormControl(vehicle.motor.fuel,Validators.required),
      modelm:new FormControl(vehicle.motor.type),
      volume:new FormControl(vehicle.motor.volume),
      hp:new FormControl(vehicle.motor.hp),
      registrationExp:new FormControl(vehicle.legal.registrationExp,Validators.required),
      insuranceExp:new FormControl(vehicle.legal.insuranceExp,Validators.required),
      nextFullService:new FormControl(vehicle.services.nextFullService,Validators.required),
      nextOilAndFiltersChange:new FormControl(vehicle.services.nextOilAndFiltersChange,Validators.required),
      nextCleaning:new FormControl(vehicle.services.nextCleaning,Validators.required),

      
    })
  }
}
