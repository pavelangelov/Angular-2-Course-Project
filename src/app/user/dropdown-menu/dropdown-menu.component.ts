import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css']
})
export class DropdownMenuComponent implements OnInit {
  private values = [
    { label: 'Friends', href: 'friends' },
    { label: 'Messages', href: 'messages' },
    { label: 'Profile', href: 'profile' },
    { label: 'Search friends', href: '/search' }
  ];

  public disabled: boolean = false;
  public status: { isopen: boolean } = { isopen: false };

  constructor() { }

  ngOnInit() {
  }

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
