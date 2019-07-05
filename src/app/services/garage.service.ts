import { Injectable } from '@angular/core';
import * as garage from '../../assets/js/data/vehicles.json';
import * as category from '../../assets/js/data/category.json';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class GarageService {

  constructor() { }

  getVehiclesInfo() {

    return garage.list;
  }
  getCategoryList() {
    //set get request to server using specific url to identify right query
    let cat = [];
    cat.push([{ "name": "All", count: garage.list.length }])
    for (let i = 0; i < category.list.length; i++) {
      let count = 0;
      for (let j = 0; j < garage.list.length; j++) {
        if (category.list[i].name == garage.list[j].type) {
          count++;
        }
      }
      cat.push([{ "name": category.list[i].name, "count": count }]);
    }
    let issues = 0;



    for (let j = 0; j < garage.list.length; j++) {
      if (garage.list[j].issues) {
        issues++;
      }
    }
    cat.push([{ "name": 'Issues', "count": issues }]);



    return cat;
  }
  getByCategory(cat) {
    //should be using get method to obtain data from server
    let list = [];
    for (let j = 0; j < garage.list.length; j++) {
      if (garage.list[j].type == cat) {
        list.push([{ "name": garage.list[j].manufacturer, "model": garage.list[j].model, "regPlates": garage.list[j].regPlates }]);
      }
    }
    return list;
  }
  allByCategory(cat) {
    if (cat == 'All') {
      return garage.list;
    }
    else {
      console.log(cat)
      let list = [];
      for (let j = 0; j < garage.list.length; j++) {
        if (garage.list[j].type == cat) {
          list.push(garage.list[j]);
        }
      }
      return list;
    }
  }
  getAllWithIssues() {
    let list = [];
    for (let j = 0; j < garage.list.length; j++) {
      if (garage.list[j].issues) {
        list.push(garage.list[j]);
      }
    }
    return list;
  }
  getSingleVehicle(plates) {
    for (let i = 0; i < garage.list.length; i++) {
      if (garage.list[i].regPlates == plates) {
        return garage.list[i];
      }
    }
  }
  saveVehicle(form: FormGroup) {
    console.log('pffffffff')
    const newV = {
      "regPlates":String( form.get('regPlates').value),
      "type": String(form.get('type').value),
      "manufacturer": String(form.get('manufacturer').value),
      "model": String(form.get('model').value),
      "color":String(form.get('color').value),
      "produced": form.get('produced').value,
      "seats": form.get('seats').value,
      "load": Number(form.get('load').value),
      "doors": form.get('doors').value,
      "workhours":form.get('workhours').value,
      "km": Number(form.get('regPlates').value),
      "issues": false,
      "motor": {
        "fuel": form.get('fuel').value,
        "type": form.get('modelm').value,
        "volume": Number(form.get('volume').value),
        "hp": Number(form.get('hp').value),
        "torque": 320
      },
      "legal": {
        "registrationExp": String(form.get('registrationExp').value),
        "insuranceExp": String(form.get('insuranceExp').value)
      },
      "services": {
        "nextFullService": Number(form.get('nextFullService').value),
        "nextOilAndFiltersChange": Number(form.get('nextOilAndFiltersChange').value),
        "nextCleaning": String(form.get('nextCleaning').value)
      }
      ,
           
            "image": "../../../assets/vehicles/no.jpeg",
            "available": true,
            "daysReserved": 0
    }
    //http post method to send data in .json format to server 
    
  }
}
