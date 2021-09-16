import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Animal } from '../animal';

@Component({
  selector: 'app-animal-alterar',
  templateUrl: './animal-alterar.component.html',
  styleUrls: ['./animal-alterar.component.css']
})
export class AnimalAlterarComponent implements OnChanges {
 
  @Input() pet?: Animal
  nome: string = ''
  tipo: string = ''
  raca: string = ''


  constructor() { }

  ngOnChanges(): void {
    if(this.pet != undefined){
      this.nome = this.pet.nome
      this.tipo = this.pet.tipo
      this.raca = this.pet.raca
    }
  }

  @Output() aoAlterar = new EventEmitter<Animal>()

  alterar(){
    this.aoAlterar.emit({"id": this.pet?.id, "nome": this.nome, "tipo": this.tipo, "raca":this.raca})
  }
}
