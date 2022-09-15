import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router'
import { LoginComponent } from './pages/login/login.component';
import { MensagesComponent } from './pages/mensages/mensages.component';

const appRoutes: Routes = [
  {
    path:'', component:LoginComponent
  },
  {path:'mensajes', component:MensagesComponent},
  {path:'**', component: LoginComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
