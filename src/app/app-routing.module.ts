import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path:'', component: IndexComponent},
  {path:'cliente', loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule)},
  {path: 'veterinario', loadChildren: () => import('./veterinario/veterinario.module').then(m => m.VeterinarioModule),}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
