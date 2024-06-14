import { Component, signal } from '@angular/core';
import { SidenavService } from '../../../services/sidenav.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(public sidebarService: SidenavService){}

}
