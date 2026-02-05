import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  /**
   * COMPONENTE INICIO (HOME)
   * 
   * ANALOGÍA: La "Recepción" o el "Lobby" del Hotel.
   * 
   * 1. No es donde duermes (no es el contenido final),
   *    pero es lo primero que ves.
   * 2. Te dice hacia dónde ir (Señalética / Menús).
   * 3. Te da la bienvenida y establece el "tono" del lugar (Branding).
   */

  // Datos para mostrar tarjetas de navegación rápidas
  // Usamos clases de Bootstrap Icons (bi-*)
  quickLinks = [
    {
      title: 'Elementos',
      desc: 'Header, Footer, Main...',
      path: '/elementos',
      icon: 'bi bi-grid-1x2-fill'
    },
    {
      title: 'Menú',
      desc: 'Tipos de navegación',
      path: '/menu',
      icon: 'bi bi-menu-button-wide-fill'
    },
    {
      title: 'Breadcrumbs',
      desc: 'Rastro de migas',
      path: '/breadcrumbs',
      icon: 'bi bi-signpost-split-fill'
    },
    {
      title: 'Mapas',
      desc: 'Planos del sitio',
      path: '/mapas-sitio',
      icon: 'bi bi-diagram-3-fill'
    },
    {
      title: 'Búsqueda',
      desc: 'Motor interno',
      path: '/busqueda',
      icon: 'bi bi-search'
    }
  ];
}
