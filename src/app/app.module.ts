import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes, UrlSegment} from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { AddnoticeformComponent } from './addnoticeform/addnoticeform.component';
import { SignupformComponent } from './signupform/signupform.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import { NoticeComponent } from './notice/notice.component';
import { MainpageComponent } from './mainpage/mainpage.component';


const appRoutes: Routes = [
  {path:'rekisteroidy', component:SignupformComponent},
  {path:'kirjaudu', component:LoginComponent},
  {path:'lisaailmoitus', component:AddnoticeformComponent},
  {path:'ilmoitukset', component:NoticeComponent},
  {path:'ilmoitukset/:id', component:NoticeComponent},
  {path:'etusivu', component:MainpageComponent},
  {path:'', redirectTo:'/etusivu', pathMatch:'full'},
  {path:'**',redirectTo:'/etusivu'}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    AddnoticeformComponent,
    SignupformComponent,
    LoginComponent,
    NoticeComponent,
    MainpageComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
