import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  /**
   * COMPONENTE MENÚ DE NAVEGACIÓN
   * 
   * ANALOGÍA: Indice de un libro o Menú de Restaurante.
   * 
   * 1. Lista organizada y jerarquizada.
   * 2. Debe ser visible y claro.
   * 3. Permite "saltar" a donde quieres ir.
   */

  // Estado del demo
  menuType: 'horizontal' | 'vertical' | 'sidebar' = 'horizontal';

  setMenuType(type: 'horizontal' | 'vertical' | 'sidebar'): void {
    this.menuType = type;
  }
}
