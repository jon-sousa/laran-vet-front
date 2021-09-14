import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { VacinaService } from '../vacina.service';

@Component({
  selector: 'app-vacina-agendar',
  templateUrl: './vacina-agendar.component.html',
  styleUrls: ['./vacina-agendar.component.css']
})
export class VacinaAgendarComponent implements OnInit {
  data: string = new Date().toLocaleDateString().split('').reverse().join('-')
  vacina: string = ''
  animalId: string|null = ''

  constructor(
    private vacinaService: VacinaService,
    private activatedService: ActivatedRoute,
    private router: Router,
    private location: Location  
  ) { }

  ngOnInit(): void {
    this.animalId = this.activatedService.snapshot.paramMap.get('id')
  }

  onSubmit(){
    let vac = {data: this.data, doenca: this.vacina, animal_id: this.animalId}
    console.log(vac)
    this.vacinaService.agendar(vac)
      .subscribe(
        res => {console.log(res); this.router.navigate(['/cliente/pet-area/', this.animalId])},
        erro => console.log(erro)
      )
  }
  
  cancelar(){
    this.location.back();
  }
}
