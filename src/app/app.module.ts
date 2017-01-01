import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AlertModule, DropdownModule } from 'ng2-bootstrap';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { AppComponent } from './app.component';
import { ServerTestComponent } from './server-test/server-test.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserDetailsComponent } from './user-details/userdetails.component';
import { UserHomeComponent } from './user-home/user-home.component';

const appRoutes: Routes = [
  { path: 'test-server', component: ServerTestComponent},
  { path: 'user-control', component: UserAuthComponent},
  { path: 'register', component: RegistrationComponent},
  { path: 'user-details', component: UserDetailsComponent},
  { path: 'home', component: UserHomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ServerTestComponent,
    UserAuthComponent,
    RegistrationComponent,
    UserDetailsComponent,
    UserHomeComponent
  ],
  imports: [
    CommonModule,
    SimpleNotificationsModule,
    AlertModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    DropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes,{
    useHash: true
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
