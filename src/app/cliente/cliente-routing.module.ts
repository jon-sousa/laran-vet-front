import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalAreaComponent } from './animal-area/animal-area.component';
import { AnimalIndexComponent } from './animal-index/animal-index.component';
import { ClienteHomeComponent } from './cliente-home/cliente-home.component';
import { ClienteLoginComponent } from './cliente-login/cliente-login.component';
import { ClienteCadastrarComponent } from './cliente-cadastrar/cliente-cadastrar.component';
import { AnimalCadastrarComponent } from './animal-cadastrar/animal-cadastrar.component';
import { ConsultaAgendarComponent } from './consulta-agendar/consulta-agendar.component';
import { VacinaAgendarComponent } from './vacina-agendar/vacina-agendar.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { VacinasComponent } from './vacinas/vacinas.component';

const routes: Routes = [
  {
    path: '', component: ClienteHomeComponent,
    children: [
      {path:'pets', component: AnimalIndexComponent},
      {path:'pet-area/:id', component: AnimalAreaComponent},
      {path:'cadastrar-pet', component: AnimalCadastrarComponent},
      {path:'cadastrar-pet', component: AnimalCadastrarComponent},
      {path:'agendar-consulta/:id', component: ConsultaAgendarComponent},
      {path: 'agendar-vacina/:id', component: VacinaAgendarComponent},
      {path: 'consultas', component: ConsultasComponent},
      {path:'vacinas', component: VacinasComponent}
    ]
  },
  {path: 'login', component: ClienteLoginComponent},
  {path: 'cadastrar', component: ClienteCadastrarComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
