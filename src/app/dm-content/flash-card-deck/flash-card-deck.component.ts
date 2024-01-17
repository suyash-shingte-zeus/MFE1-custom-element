import { Component, Input, OnInit } from '@angular/core';
import { GlobalStateService } from 'src/app/services/global/global-state.service';
import { LocalStateService } from 'src/app/services/local-state.service';

@Component({
  selector: 'app-flash-card-deck',
  templateUrl: './flash-card-deck.component.html',
  styleUrls: ['./flash-card-deck.component.scss'],
  providers: [LocalStateService]
})
export class FlashCardDeckComponent implements OnInit {
  localState: any;
  globalState: any;
  @Input() parentData: any;
  
  constructor(private globalStateService: GlobalStateService, private localStateService: LocalStateService) { 
    this.globalStateService.getState().subscribe((state)=>{
      this.globalState = state;
    })
    this.localStateService.getState().subscribe((state)=>{
      this.localState = state;
    })
  }

  ngOnInit(): void {
    console.log(this.parentData)
  }

}
