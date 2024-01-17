import { Component, Input, OnInit } from '@angular/core';
import { GlobalStateService } from 'src/app/services/global/global-state.service';

@Component({
  selector: 'app-flash-card-deck',
  templateUrl: './flash-card-deck.component.html',
  styleUrls: ['./flash-card-deck.component.scss']
})
export class FlashCardDeckComponent implements OnInit {
  
  globalState: any;
  @Input() parentData: any;
  
  constructor(private globalStateService: GlobalStateService) { 
    this.globalStateService.getState().subscribe((state)=>{
      this.globalState = state;
    })
  }

  ngOnInit(): void {
    console.log(this.parentData)
  }

}
