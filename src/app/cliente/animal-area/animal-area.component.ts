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
  pet?: any

  constructor(
    private animaisClienteService: AnimaisClientesService,
    private route: ActivatedRoute  
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    if(id){
      this.animaisClienteService.buscarUm(id)
        .subscribe(
          res => {console.log(res); this.pet = res},
          erro => console.log(erro)
      )
    }
  }

}
