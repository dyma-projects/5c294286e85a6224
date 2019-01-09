import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() compteur: number;
  @Output() newCompteurVal: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  updateCompteur(currentVal: number, incrementationWay: string): void {
    if (incrementationWay === 'more') {
      this.newCompteurVal.emit(currentVal + 1);
    } else {
      this.newCompteurVal.emit(currentVal - 1);
    }
  }
}
