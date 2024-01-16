import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flash-card-deck',
  templateUrl: './flash-card-deck.component.html',
  styleUrls: ['./flash-card-deck.component.scss']
})
export class FlashCardDeckComponent implements OnInit {
  
  @Input() parentData: any;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.parentData)
  }

}
