import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoClienteService } from '../autenticacao-cliente.service';

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.css']
})
export class BarraLateralComponent implements OnInit {

  constructor(private autenticacaoClienteService: AutenticacaoClienteService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.autenticacaoClienteService.logout()
      .subscribe(
        resultado => {console.log(resultado); this.router.navigate(['/']);},
        erro => console.log(erro)
      )
  }
}
