import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import{ HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainAppComponent } from './components/main-app/main-app.component';
import { StatusComponent } from './components/status/status.component';
import { GarageComponent } from './components/garage/garage.component';
import { ManagementComponent } from './components/management/management.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { UserComponent } from './components/user/user.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainAppComponent,
    StatusComponent,
    GarageComponent,
    ManagementComponent,
    ResourcesComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule ,
    BrowserAnimationsModule,
    MaterialModule

    
  ],
  
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  entryComponents:[StatusComponent,GarageComponent,ManagementComponent,ResourcesComponent,UserComponent]
})
export class AppModule { }
