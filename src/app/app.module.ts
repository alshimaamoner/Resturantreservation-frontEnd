import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {AppComponent} from './app.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LoginComponent} from './login/login.component';
import {HttpInterceptorService} from './services/HttpInterceptorService';
import {AddReservation} from './AddReservation/add-reservation.component';
import {ShowAvailableTableComponent} from './view-available-tables/view-available-table.component';
import { LogOutComponent } from './log-out/log-out.component';
import {WelcomeAdminComponent} from './welcome-admin/welcome-admin.component';
import { AddTableComponent } from './add-table/add-table.component';
import { ShowReservationComponent } from './show-reservation/show-reservation.component';

const routes: Routes = [
  {path: 'signup' , component : SignUpComponent} ,
  {path: 'login', component : LoginComponent},
  {path: 'welcome', component : WelcomeAdminComponent} ,
  {path: 'table/add' , component : AddTableComponent},
  {path: 'viewReservation/show' , component : ShowReservationComponent},
  {path: 'viewTables' , component : ShowAvailableTableComponent},
  {path: 'reservation' , component : AddReservation},
  {path: 'logout' , component : LogOutComponent} ,
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent, WelcomeAdminComponent,
    SignUpComponent, HeaderComponent, FooterComponent, LoginComponent, AddReservation , ShowAvailableTableComponent, LogOutComponent ,
    LogOutComponent,
    AddTableComponent,
    ShowReservationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
