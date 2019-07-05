import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainAppComponent } from './components/main-app/main-app.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [{
  path:'',
  redirectTo:'login',
  pathMatch:'full'
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'app',
  component:MainAppComponent,
  canActivate:[AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
