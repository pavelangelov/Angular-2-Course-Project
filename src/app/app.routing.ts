import { Routes } from '@angular/router';

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
import { UserGalleryComponent } from './user/user-gallery/user-gallery.component';
import { UserPostsComponent } from './user/user-posts/user-posts.component';

export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'search', component: SearchFriendsComponent},
  {
    path: 'user',
    component: UserHomeComponent,
    children: [
      { path: 'home', component: UserPostsComponent},
      { path: 'profile', component: UserProfileComponent },
      { path: 'messages', component: UserMessagesComponent},
      { path: 'friends', component: UserFriendsComponent},
      { path: 'gallery', component: UserGalleryComponent}
    ]
  },
  { path: '**', component: NotFoundComponent}
];
