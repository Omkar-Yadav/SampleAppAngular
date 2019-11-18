import { FeaturesComponent } from './features/features.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { LogoutComponent } from './logout/logout.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { TodoComponent } from './todo/todo.component';
import { RouteguardService } from './service/routeguard.service';


const routes: Routes = [
{path : 'welcome/:name', component: WelcomeComponent, canActivate: [RouteguardService]},
{path : 'login', component:  LoginComponent},
{path : 'todo', component:  TodoComponent, canActivate: [RouteguardService]},
{path : 'features', component:  FeaturesComponent, canActivate: [RouteguardService]},
{path : 'logout', component:  LogoutComponent, canActivate: [RouteguardService]},
{path : '', component:  LoginComponent},
{path : '**', component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
