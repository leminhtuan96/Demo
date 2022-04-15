import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterComponent } from './font-end/layouts/master/master.component';
import { NavbarComponent } from './font-end/layouts/core/navbar/navbar.component';
import { HeaderComponent } from './font-end/layouts/core/header/header.component';
import { HomeComponent } from './font-end/layouts/components/home/home.component';
import { FooterComponent } from './font-end/layouts/core/footer/footer.component';
import { HousesListComponent } from './font-end/layouts/components/houses/houses-list/houses-list.component';
import { LoginComponent } from './font-end/layouts/pages/login/login.component';
import { RegisterComponent } from './font-end/layouts/pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    HousesListComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
