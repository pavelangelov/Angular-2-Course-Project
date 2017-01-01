import { Component, OnInit } from '@angular/core';

import { ViewModel } from '../registration/registration-model';

@Component({
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {
  private values = [
    { label: 'Friends', href: 'friends' },
    { label: 'Messages', href: 'messages' },
    { label: 'Profile', href: 'profile' },
    { label: 'Search friends', href: 'search' }
  ];

  public disabled: boolean = false;
  public status: { isopen: boolean } = { isopen: false };
  public items: string[] = ['The first choice!',
    'And another choice for you.', 'but wait! A third!'];

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  selectItem(value: string) {
    console.log(`Selected ${value}`);
  }
}
