import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';
import { ConsultaService } from '../consulta.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {
  pets?: Animal[]

  constructor(private consultaService: ConsultaService) { }

  ngOnInit(): void {
    this.consultaService.todasPorCliente()
      .subscribe(
        res => {this.pets = res.response, console.log(this.pets)},
        erro => console.log(erro)
      )
  }

}
