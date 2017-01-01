import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AlertModule, DropdownModule } from 'ng2-bootstrap';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { AppComponent } from './app.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserMessagesComponent } from './user/user-messages/user-messages.component';
import { UserFriendsComponent } from './user/user-friends/user-friends.component';
import { SearchFriendsComponent } from './search-friends/search-friends.component';
import { DropdownMenuComponent } from './user/dropdown-menu/dropdown-menu.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'search', component: SearchFriendsComponent},
  {
    path: 'user',
    component: UserHomeComponent,
    children: [
      { path: 'profile', component: UserProfileComponent },
      { path: 'messages', component: UserMessagesComponent},
      { path: 'friends', component: UserFriendsComponent}
    ]
  },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserAuthComponent,
    RegistrationComponent,
    UserProfileComponent,
    UserHomeComponent,
    HomeComponent,
    NotFoundComponent,
    UserMessagesComponent,
    UserFriendsComponent,
    SearchFriendsComponent,
    DropdownMenuComponent
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
