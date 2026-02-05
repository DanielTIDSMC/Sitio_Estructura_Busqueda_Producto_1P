import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ElementosSitioComponent } from './pages/elementos-sitio/elementos-sitio.component';
import { MenuComponent } from './pages/menu/menu.component';
import { BreadcrumbPageComponent } from './pages/breadcrumb/breadcrumb.component'; // Importamos la PAGINA, no el componente compartido
import { MapasSitioComponent } from './pages/mapas-sitio/mapas-sitio.component';
import { Error404Component } from './pages/error-404/error-404.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';

import { LayoutComponent } from './layout/layout.component';
import { OnePageStructureComponent } from './pages/one-page-structure/one-page-structure.component';

export const routes: Routes = [
    {
        path: 'estructura-web',
        component: OnePageStructureComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: InicioComponent,
                pathMatch: 'full'
            },
            {
                path: 'elementos',
                component: ElementosSitioComponent
            },
            {
                path: 'menu',
                component: MenuComponent
            },
            {
                path: 'breadcrumbs',
                component: BreadcrumbPageComponent
            },
            {
                path: 'mapas-sitio',
                component: MapasSitioComponent
            },
            {
                path: 'error-404',
                component: Error404Component
            },
            {
                path: 'busqueda',
                component: BusquedaComponent
            }
        ]
    }
];


