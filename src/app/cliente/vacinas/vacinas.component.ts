import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';
import { VacinaService } from '../vacina.service';

@Component({
  selector: 'app-vacinas',
  templateUrl: './vacinas.component.html',
  styleUrls: ['./vacinas.component.css']
})
export class VacinasComponent implements OnInit {
  pets?: Animal[]

  constructor(private vacinaService: VacinaService) { }

  ngOnInit(): void {
    this.vacinaService.todasPorCliente()
      .subscribe(
        res => {this.pets = res.response; console.log(this.pets)},
        erro => console.log(erro)
      )
  }

}
