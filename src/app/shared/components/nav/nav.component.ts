import { Component } from '@angular/core';
import { SidenavService } from '../../../services/sidenav.service';

@Component({
  selector: 'shared-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(
    public sidebarService: SidenavService){}
    toggleSidenav(){
      this.sidebarService.toggleCollapse();
    }

}
