import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AlertModule, DropdownModule } from 'ng2-bootstrap';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routing';
import { userComponents } from './user/';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchFriendsComponent } from './search-friends/search-friends.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent,
    NotFoundComponent,
    SearchFriendsComponent,
    userComponents.UserAuthComponent,
    userComponents.UserProfileComponent,
    userComponents.UserHomeComponent,
    userComponents.UserMessagesComponent,
    userComponents.UserFriendsComponent,
    userComponents.DropdownMenuComponent,
    userComponents.UserGalleryComponent,
    userComponents.UserPostsComponent
  ],
  imports: [
    CommonModule,
    SimpleNotificationsModule,
    AlertModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    DropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes, {
      useHash: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
