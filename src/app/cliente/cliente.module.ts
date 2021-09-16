import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteHomeComponent } from './cliente-home/cliente-home.component';
import { AnimalCardComponent } from './animal-card/animal-card.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { AnimalIndexComponent } from './animal-index/animal-index.component';
import { ClienteLoginComponent } from './cliente-login/cliente-login.component';
import { FormsModule } from '@angular/forms';
import { AutenticacaoClienteService } from './autenticacao-cliente.service';
import { AnimalAreaComponent } from './animal-area/animal-area.component';
import { ClienteCadastrarComponent } from './cliente-cadastrar/cliente-cadastrar.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { AnimalCadastrarComponent } from './animal-cadastrar/animal-cadastrar.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ConsultaAgendarComponent } from './consulta-agendar/consulta-agendar.component';
import { VacinaAgendarComponent } from './vacina-agendar/vacina-agendar.component';
import { VacinasComponent } from './vacinas/vacinas.component';
import { AnimalAlterarComponent } from './animal-alterar/animal-alterar.component';


@NgModule({
  declarations: [
    ClienteHomeComponent,
    AnimalCardComponent,
    BarraLateralComponent,
    AnimalIndexComponent,
    ClienteLoginComponent,
    AnimalAreaComponent,
    ClienteCadastrarComponent,
    ConsultasComponent,
    AnimalCadastrarComponent,
    ConsultaComponent,
    ConsultaAgendarComponent,
    VacinaAgendarComponent,
    VacinasComponent,
    AnimalAlterarComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    FormsModule
  ],
  exports: [
    ClienteHomeComponent,
    AnimalCardComponent,
    BarraLateralComponent,
    AnimalIndexComponent,
    ClienteLoginComponent
  ],
})
export class ClienteModule { }
