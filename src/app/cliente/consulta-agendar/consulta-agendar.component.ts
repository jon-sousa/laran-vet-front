import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common'
import { ActivatedRoute, Router} from '@angular/router';
import { ConsultaService } from '../consulta.service';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-consulta-agendar',
  templateUrl: './consulta-agendar.component.html',
  styleUrls: ['./consulta-agendar.component.css']
})
export class ConsultaAgendarComponent implements OnInit {
  relato: string = ''
  resposta: string = ''
  pago: boolean|number = false
  concluido: boolean|number = false
  taxa: string|number = '50,00'

  constructor(
    private consultaService: ConsultaService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location  
  ) { }

  ngOnInit(): void {
  }

  salvar(){
    let idAnimal = this.route.snapshot.paramMap.get('id')
    
    if(!idAnimal){
      return
    }

    let consulta = {
      relato: this.relato, 
      pago: this.pago, 
      concluido: false, 
      taxa: this.taxa.toString().replace(',', '.'),
      animal_id: idAnimal
    }

    this.consultaService.salvar(consulta)
      .subscribe(
        () => {this.router.navigate(['/cliente/pet-area/', idAnimal])},
        erro => console.log(erro)
      )
    console.log(consulta)
  }

  salvarPagar(){
    this.pago = true
    this.salvar()
  }

  cancelar(){
    this.location.back();
  }

  formatarValor(event: KeyboardEvent){
    
    let taxa = this.taxa.toString().trim().replace(/[^0-9]/g, '')
    taxa = Number(taxa).toString()
    if(taxa == '' || Number(taxa) == 0){
      this.taxa = '00,00'
      return
    }
    
    while(taxa.length < 4){
      taxa = '0' + taxa
    }

    taxa = taxa.substr(0, taxa.length - 2) + ',' + taxa.substr(taxa.length - 2)

    this.taxa = taxa
  }
}
