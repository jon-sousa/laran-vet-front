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
    this.autenticacaoClienteService.login({'email': this.email, 'password': this.senha})
      .subscribe(
        response => {console.log('certinho: \n'), console.log(response); this.router.navigate(['/cliente'])},
        erro => { console.log('Erro:\n'); console.log(erro)}
      )
  }

}
