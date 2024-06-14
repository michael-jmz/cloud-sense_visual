import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  collapsed = signal(false); // Señal que indica si la barra lateral está colapsada o no
  sidenavWidth = computed(() => (this.collapsed() ? '65px' : '250px')); // Computa el ancho de la barra lateral basado en el estado de 'collapsed'

  toggleCollapse() {
    // Método para alternar el estado de 'collapsed'
    this.collapsed.set(!this.collapsed());
  }
}
