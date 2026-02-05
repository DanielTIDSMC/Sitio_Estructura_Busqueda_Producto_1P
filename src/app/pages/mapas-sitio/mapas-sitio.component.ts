import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mapas-sitio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mapas-sitio.component.html',
  styleUrls: ['./mapas-sitio.component.css']
})
export class MapasSitioComponent {
  /**
   * COMPONENTE MAPAS DEL SITIO (SITEMAP)
   * 
   * ANALOGÍA: El Directorio del Centro Comercial (Mapa "Usted está aquí").
   * 
   * 1. Visión global de todo lo que existe.
   * 2. Ayuda a los robots de búsqueda (Google) a indexar.
   * 3. Útil cuando estás perdido.
   */

  // Datos para el árbol visual
  siteTree = [
    {
      name: 'Inicio',
      children: [
        { name: 'Elementos', children: [] },
        {
          name: 'Navegación',
          children: [
            { name: 'Menú' },
            { name: 'Breadcrumbs' }
          ]
        },
        { name: 'Mapa del Sitio', children: [] },
        { name: 'Búsqueda', children: [] }
      ]
    }
  ];
}
