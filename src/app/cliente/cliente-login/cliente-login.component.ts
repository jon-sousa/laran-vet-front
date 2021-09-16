import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoClienteService } from '../autenticacao-cliente.service';

@Component({
  selector: 'app-cliente-login',
  templateUrl: './cliente-login.component.html',
  styleUrls: ['./cliente-login.component.css']
})
export class ClienteLoginComponent implements OnInit {

  email:string
  senha:string
  credenciaisIncorretas:boolean = false
  erroRequisicao:boolean = false

  constructor(
    private autenticacaoClienteService: AutenticacaoClienteService,
    private router: Router
  ) {
    this.email = ''
    this.senha = ''
   }

  ngOnInit(): void {
    this.autenticacaoClienteService.shakeHand()
      .subscribe(
        () => console.log('handshake efetuado'),
        erro => console.log(`Erro: ${JSON.stringify(erro)})`)
      )
  }

  onSubmit(){
    this.erroRequisicao = false
    this.credenciaisIncorretas = false

    this.autenticacaoClienteService.login({'email': this.email, 'password': this.senha})
      .subscribe(
        response => {this.router.navigate(['/cliente'])},
        erro => { 
          if(erro.status === 403){
            this.credenciaisIncorretas = true
          }
          else{
            this.erroRequisicao = true
          }
        }
      )
  }

}
