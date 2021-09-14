import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoClienteService } from '../autenticacao-cliente.service';

@Component({
  selector: 'app-cliente-cadastrar',
  templateUrl: './cliente-cadastrar.component.html',
  styleUrls: ['./cliente-cadastrar.component.css']
})
export class ClienteCadastrarComponent implements OnInit {

  nome: string
  email:string
  senha:string

  constructor(
    private autenticacaoClienteService: AutenticacaoClienteService,
    private router: Router
  ) 
  {
    this.nome = ''
    this.email = ''
    this.senha = ''
   }

  ngOnInit(): void {}

  onSubmit(){
    this.autenticacaoClienteService.cadastrar({"nome": this.nome, "email": this.email, "password": this.senha})
      .subscribe(
        res =>{console.log('Cliente cadastrado'), this.router.navigate(['/cliente/login'])},
        erro => console.log(erro)
      )
  }
}
