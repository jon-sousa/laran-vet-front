import { Component, OnInit } from '@angular/core';
import { AnimaisClientesService } from '../animais-clientes.service';
import { Animal } from '../animal';

@Component({
  selector: 'app-animal-index',
  templateUrl: './animal-index.component.html',
  styleUrls: ['./animal-index.component.css']
})
export class AnimalIndexComponent implements OnInit {
  animais?: Animal[]

  constructor(private animaisService: AnimaisClientesService) { 
    this.animais = []
  }

  ngOnInit(): void {
    this.animaisService.buscarTodos()
      .subscribe(
        animais => this.animais = animais,
        erro => console.log(erro)
      )
  }

}
