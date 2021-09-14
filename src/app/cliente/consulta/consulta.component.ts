import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Consulta } from '../consulta';
import { ConsultaService } from '../consulta.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  @Input() consulta?: Consulta

  constructor(private consultaService: ConsultaService, private router: Router) { }

  ngOnInit(): void {
  }

  pagar(){
    if(this.consulta != undefined && this.consulta != null){
      this.consultaService.pagar(this.consulta)
        .subscribe(
          res => {console.log('Consulta paga com sucesso'); console.log(res)},
          erro => {console.log(erro); if(this.consulta != undefined) this.consulta.pago = false}
        )
    }
  }
}
