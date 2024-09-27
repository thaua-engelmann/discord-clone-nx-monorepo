import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type NavbarItem = {
  id: number,
  txt: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {

  protected navbarItems: NavbarItem[] = [
    {
      id: 1,
      txt: "Download"
    },
    {
      id: 2,
      txt: "Nitro"
    },
    {
      id: 3,
      txt: "Discover"
    },
    {
      id: 4,
      txt: "Safety"
    },
    {
      id: 5,
      txt: "Support"
    },
    {
      id: 6,
      txt: "Blog"
    },
    {
      id: 7,
      txt: "Careers"
    },
  ];

}
