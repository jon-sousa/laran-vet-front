import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-animal-cadastrar',
  templateUrl: './animal-cadastrar.component.html',
  styleUrls: ['./animal-cadastrar.component.css']
})
export class AnimalCadastrarComponent implements OnInit {

  nome: string
  tipo: string
  raca: string

  constructor(private animalService: AnimalService, private router: Router) {
    this.nome = ''
    this.tipo = ''
    this.raca = ''
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.animalService.cadastrar({"nome": this.nome, "tipo": this.tipo, "raca": this.raca})
      .subscribe(
        response => {console.log('Animal cadastrado com sucesso'); this.router.navigate(['/cliente/pets'])},
        erro => {console.log(erro)}
      )
  }

}
