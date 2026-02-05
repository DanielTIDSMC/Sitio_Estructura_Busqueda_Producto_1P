export type SiteItemType = 'pagina' | 'seccion';

export type SiteItem = {
    id: string;
    tittle: string;
    description: string;
    path: string;
    type: SiteItemType;
    section: string;
    keywords: string[];
    otro?: String;
};

export const SITE_INDEX: SiteItem[] = [
    {
        id: 'inicio',
        tittle: 'Inicio',
        description: 'Página de inicio del sitio web.',
        path: '/',
        type: 'pagina',
        section: 'inicio',
        keywords: ['inicio', 'home', 'principal'],
        otro: "asdasd"
    },
    {
        id: 'elementos',
        tittle: 'Elementos del sitio',
        description: 'Identifica los elementos que componen el sitio web.',
        path: '/elementos',
        type: 'pagina',
        section: 'Estructura del sitio',
        keywords: ['elementos', 'componentes', 'sitio', 'header', 'footer', 'main', 'layout'],
    },
    {
        id: 'menu',
        tittle: 'Menú de navegación',
        description: 'Explora el menú de navegación del sitio web.',
        path: '/menu',
        type: 'pagina',
        section: 'Navegación',
        keywords: ['menú', 'navegación', 'links', 'barra lateral', 'header', 'footer','persistente'],
    },
    {
        id: 'breadcrumbs',
        tittle: 'Breadcrumbs',
        description: 'Describe la funcionalidad de los breadcrumbs en la navegación del sitio web.',
        path: '/breadcrumbs',
        type: 'seccion',
        section: 'Estructura del sitio',
        keywords: ['breadcrumbs', 'navegación', 'ruta', 'historial', 'migas', 'ruta','ux'],
    },
    {
        id: 'mapas-sitio',
        tittle: 'Mapas del sitio',
        description: 'Diseño del mapa del sitio y relación con la navegación.',
        path: '/mapas-sitio',
        type: 'pagina',
        section: 'Estructura del sitio',
        keywords: ['mapa', 'sitio', 'navegación', 'estructura', 'sitemap','rutas'],
    },
    {
        id: 'error404',
        tittle: 'Error 404',
        description: 'Página de error 404 del sitio web.',
        path: '/no-existe',
        type: 'seccion',
        section: 'Errores',
        keywords: ['error', '404', 'no encontrado', 'ruta'],
    }
];