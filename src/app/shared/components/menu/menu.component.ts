import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  menuItems!: MenuItem[];

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/',
            routerLinkActiveOptions: { exat: true }
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: '/numbers',
            routerLinkActiveOptions: { exat: true }
          },
          {
            label: 'No Comunes',
            icon: 'pi pi-globe',
            routerLink: '/uncommon',
            routerLinkActiveOptions: { exat: true }
          },

        ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'otro elemento',
            icon: 'pi pi-cog',
          }
        ]
      }
    ];
  }
}
