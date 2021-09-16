import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  imgs: string[] = []

  constructor() { }

  ngOnInit(): void {
    this.imgs = [
      "./assets/img/alergia.jpg",
      "./assets/img/depressao.jpg",
      "./assets/img/carrapato.jpg",
      "./assets/img/insuficienciarenal.jpg",
      "./assets/img/obsidade.jpg",
      "./assets/img/otite.jpg"
    ]
  }

}
