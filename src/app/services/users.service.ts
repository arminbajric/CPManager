import { Injectable } from '@angular/core';
import * as list from '../../assets/js/data/workers.json'

import { FormGroup } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { res } from '../data/res.js';
import { AuthGuard } from '../guards/auth.guard.js';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
validationDetails:res[]=[];
  constructor(private http:HttpClient,private router:Router) { }

  checkuserLogin(form:FormGroup):Observable<any>
  {
    const data={
      email:form.get('email').value,
      password:form.get('password').value
    }
     return this.http.post('http://localhost:3000/users/userAuth',data,{observe:'response'}).pipe(map(response=>{return response}))     
   
  }
  addNewUser(form:FormGroup):Observable<any>{
     const data={
       username:form.get('username').value,
       email:form.get('email').value,
       password:form.get('password').value,
       firstName:form.get('firstName').value,
       lastName:form.get('lastName').value,
       street:form.get('street').value,
       town:form.get('town').value,
       street_number:form.get('streetNumber').value,
       phone_number:form.get('phoneNumber').value,
      role:"Regular"
    
    }
   return  this.http.post<Response>('http://localhost:3000/users/add',data,{observe:'response'}).pipe(map(response=>{return response}))
  }
 isLoggedIn(token):Promise<boolean>{
  
  return new Promise(resolve=>{this.http.get('http://localhost:3000/token/check-token',{params:new HttpParams().set('token',localStorage.getItem('cpmtoken')),observe:'response'}).subscribe((response:any)=>{

   if(response.body.valid)
   {
     resolve(true)
   }
   else{
this.router.navigate(['login'],{queryParams:{error:true}})
     resolve(false)
   }
   })})  
  
 }

}
