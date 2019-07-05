import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthGuard } from 'src/app/guards/auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginGroup: FormGroup;
  regGroup: FormGroup;
  submitted: boolean;
  message:string;
  session:boolean;
  constructor(private router: Router, private userService: UsersService,private guard :AuthGuard,private arouter:ActivatedRoute) { }

  ngOnInit() {
   this.arouter.queryParams.subscribe(params=>{
     if(params['error']){
      this.session=params['error'];
      this.message="Your session is expired.Please signin !"
     }
     else{
       this.session=false;
     }
   })
    this.submitted = false;
    this.loginGroup = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      stayLogged: new FormControl('')
    })
    this.regGroup = new FormGroup({
      username:  new FormControl('',Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      passretype: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      streetNumber: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      town:new FormControl('',Validators.required)
    })
  }


  login() {
  
  
   this.userService.checkuserLogin(this.loginGroup).subscribe(response=>{
     if(response.body.email&& response.body.password){
     localStorage.setItem('cpmtoken',response.body.token)
     this.router.navigate(['app'],{queryParams:{id:response.body.token}})
    }
   })
 
  }
  tryToAddUser() {
    this.userService.addNewUser(this.regGroup).subscribe(response=>{
      console.log(response.body)
    });
  }
}
