import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-breadcrumb-page',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbPageComponent {
    /**
      * COMPONENTE BREADCRUMBS (PÁGINA EDUCATIVA)
      *
      * ANALOGÍA: El rastro de migas de pan de Hansel y Gretel.
      *
      * 1. Te dice DÓNDE estás.
      * 2. Te dice DE DÓNDE vienes.
      * 3. Te permite VOLVER (navegar hacia arriba).
      *
      * NOTA: ¡Mira arriba! El componente funcional <app-breadcrumb> 
      * ya está funcionando en esta misma página gracias al layout principal.
      */

    // Variables para la simulación interactiva
    currentPath: string[] = ['Inicio', 'Productos', 'Electrónica', 'Televisores'];

    jumpTo(index: number): void {
        // Simula navegar a un nivel superior cortando el array
        this.currentPath = this.currentPath.slice(0, index + 1);
    }

    resetPath(): void {
        this.currentPath = ['Inicio', 'Productos', 'Electrónica', 'Televisores'];
    }
}
