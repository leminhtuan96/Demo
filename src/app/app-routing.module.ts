import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './font-end/layouts/components/home/home.component';
import { HousesListComponent } from './font-end/layouts/components/houses/houses-list/houses-list.component';
import { MasterComponent } from './font-end/layouts/master/master.component';
import { LoginComponent } from './font-end/layouts/pages/login/login.component';
import { RegisterComponent } from './font-end/layouts/pages/register/register.component';


const routes: Routes = [
  {
    path: "",
    component: MasterComponent,
    children: [
      {
        path:"home",
        component: HomeComponent
      },
      {
        path: "houses",
        component: HousesListComponent
      }
    ]

  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
