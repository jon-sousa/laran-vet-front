import { Component, Input, OnInit } from '@angular/core';
import { Animal } from '../animal';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.css']
})
export class AnimalCardComponent implements OnInit {
  @Input() animal?: Animal

  constructor() { }

  ngOnInit(): void {
  }

}
