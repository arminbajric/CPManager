import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { StatusComponent } from '../status/status.component';
import { GarageComponent } from '../garage/garage.component';
import { UsersService } from 'src/app/services/users.service';
import { ManagementComponent } from '../management/management.component';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { UserComponent } from '../user/user.component';
@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.css']
})
export class MainAppComponent implements OnInit {
  @ViewChild('block', { read: ViewContainerRef }) block: ViewContainerRef;
  role: string;
  username: string;
  id: string;
  constructor(private resolver: ComponentFactoryResolver, private router: Router, private workersService: UsersService, private aRoute: ActivatedRoute) { }

  ngOnInit() {


    
  }
  openHome() {
    this.block.clear();
    const newNode = this.resolver.resolveComponentFactory(StatusComponent);
    const ref = this.block.createComponent(newNode);
    ref.changeDetectorRef.detectChanges();
  }
  openGarage() {

    this.block.clear();
    const newNode = this.resolver.resolveComponentFactory(GarageComponent);
    const ref = this.block.createComponent(newNode);
    ref.changeDetectorRef.detectChanges();

  }
  openManagement() {
    this.block.clear();
    const newNode = this.resolver.resolveComponentFactory(ManagementComponent);
    const ref = this.block.createComponent(newNode);
    ref.changeDetectorRef.detectChanges();

  }
  openResources() {

  }
  logOut() {
    localStorage.removeItem('CPMid')
    localStorage.removeItem('CPMusername')
    localStorage.removeItem('CPMrole')
    localStorage.removeItem('CPMuser')
    this.router.navigate(['login']);
  }
  openUserProfile() { }
  openWorkplace(){
    this.block.clear();
    const newNode = this.resolver.resolveComponentFactory(UserComponent);
    const ref = this.block.createComponent(newNode);
    ref.changeDetectorRef.detectChanges();
  }
}
