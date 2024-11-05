import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./home/home.page').then(m => m.HomePage) },
  { path: 'gestion-de-citas', loadComponent: () => import('./gestion-de-citas/gestion-de-citas.page').then(m => m.gestion-de-citas.Page) },
  { path: 'configuracion', loadComponent: () => import('./configuracion/configuracion.page').then(m => m.configuracion.Page) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
