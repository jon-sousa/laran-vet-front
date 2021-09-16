import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimaisClientesService } from '../animais-clientes.service';
import { Animal } from '../animal';

@Component({
  selector: 'app-animal-area',
  templateUrl: './animal-area.component.html',
  styleUrls: ['./animal-area.component.css']
})
export class AnimalAreaComponent implements OnInit {
  pet?: Animal

  constructor(
    private animaisClienteService: AnimaisClientesService,
    private route: ActivatedRoute,
    private router: Router  
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    if(id){
      this.animaisClienteService.buscarUm(id)
        .subscribe(
          res => {this.pet = res},
          erro => console.log(erro)
      )
    }
  }

  alterar($event: any){
    this.animaisClienteService.alterar($event)
      .subscribe(
        res =>{ 
          if(this.pet != undefined){
            this.pet.nome = res.nome
            this.pet.tipo = res.tipo
            this.pet.raca = res.raca
          }
        },
        erro => console.error(erro)
      )
  }

  deletar(){
    if(this.pet != undefined){  
      this.animaisClienteService.deletar(this.pet.id as number)
        .subscribe(
          () => this.router.navigate(['/cliente/pets']),
          erro => console.error(erro)
        )
    }
  }

}
