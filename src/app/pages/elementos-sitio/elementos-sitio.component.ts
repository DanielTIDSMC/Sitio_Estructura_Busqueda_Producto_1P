import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-elementos-sitio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './elementos-sitio.component.html',
  styleUrls: ['./elementos-sitio.component.css']
})
export class ElementosSitioComponent {
  /**
   * COMPONENTE ELEMENTOS DEL SITIO
   * 
   * ANALOGÍA: La Anatomía Humana o de una Casa.
   * 
   * 1. Header (Cabeza/Techo): Pensamiento, identidad, navegación global.
   * 2. Main (Cuerpo/Habitaciones): Donde ocurre la acción y contenido vital.
   * 3. Footer (Pies/Cimientos): Soporte, información legal, contacto.
   */

  // Estado para el demo interactivo
  activePart: string = 'todo'; // 'header', 'main', 'footer', 'todo'

  highlight(part: string): void {
    this.activePart = part;
  }
}
