import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, NgZone, OnInit, Output } from '@angular/core';
import { NGXLogger } from "ngx-logger";
import { GlobalStateService } from 'src/app/services/global/global-state.service';
import { LocalStateService } from 'src/app/services/local-state.service';

@Component({
  selector: 'app-word-card-deck',
  templateUrl: './word-card-deck.component.html',
  styleUrls: ['./word-card-deck.component.scss'],
  providers: [LocalStateService]
})
export class WordCardDeckComponent implements OnInit {
  localState: any;
  globalState: any;
  @Input() parentData: any;
  @Output() newItemEvent: EventEmitter<string> = new EventEmitter<string>();
  
  constructor(private zone: NgZone, private logger: NGXLogger, private globalStateService: GlobalStateService, private localStateService: LocalStateService) {
    console.log(`MFE Zone: ${this.zone}`);
    this.globalStateService.getState().subscribe((state)=>{
      this.globalState = state;
    })
    this.localStateService.getState().subscribe((state)=>{
      this.localState = state;
    })
  }
  
  ngOnInit(): void {
    console.log(this.parentData);
    this.logger.log("MFE NGXLogger");
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  addNewGlobalItem(value: string) {
    this.globalStateService.updateState({"item": value})
  }
  addNewLocalItem(value: string) {
    this.localStateService.updateState({"item": value})
  }
}
