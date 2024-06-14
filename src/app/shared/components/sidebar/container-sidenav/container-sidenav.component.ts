import { Component, Input, SimpleChanges, computed, signal } from '@angular/core';


export type MenuItem={
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-container-sidenav',
  templateUrl: './container-sidenav.component.html',
  styleUrl: './container-sidenav.component.css'
  })
  export class ContainerSidenavComponent {
  sideNavCollapsed = signal(false);// Crear una señal interna para el estado colapsado

  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val); // Actualizar la señal interna cuando cambia la propiedad de entrada
  }
  menuItem =  signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label:'Dashboard',
      route: 'dashboard'
    },
    {
      icon: 'analytics',
      label:'Analytics',
      route: 'analytics'
    },
    {
      icon: 'settings',
      label:'Configuraciones',
      route: 'Configuraciones'
      }
      ]);
      profilePicSize = computed(() => this.sideNavCollapsed() ? '32px' : '100px'); // Crear una señal computada basada en `sideNavCollapsed`

    }


