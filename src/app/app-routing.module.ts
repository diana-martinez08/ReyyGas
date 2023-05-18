import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pedido',
    loadChildren: () => import('./pedido/pedido.module').then( m => m.PedidoPageModule)
  },
  {
    path: 'tienda',
    loadChildren: () => import('./tienda/tienda.module').then( m => m.TiendaPageModule)
  },
  {
    path: 'tips-ahorro',
    loadChildren: () => import('./tips-ahorro/tips-ahorro.module').then( m => m.TipsAhorroPageModule)
  },
  {
    path: 'recetas',
    loadChildren: () => import('./recetas/recetas.module').then( m => m.RecetasPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'cerrar-sesion',
    loadChildren: () => import('./cerrar-sesion/cerrar-sesion.module').then( m => m.CerrarSesionPageModule)
  },
  {
    path: 'tipo-pago',
    loadChildren: () => import('./tipo-pago/tipo-pago.module').then( m => m.TipoPagoPageModule)
  },
  {
    path: 'pago-efectivo',
    loadChildren: () => import('./pago-efectivo/pago-efectivo.module').then( m => m.PagoEfectivoPageModule)
  },
  {
    path: 'pago-transferencia',
    loadChildren: () => import('./pago-transferencia/pago-transferencia.module').then( m => m.PagoTransferenciaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
