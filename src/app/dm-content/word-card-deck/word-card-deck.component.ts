import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, NgZone, OnInit, Output } from '@angular/core';
import { NGXLogger } from "ngx-logger";

@Component({
  selector: 'app-word-card-deck',
  templateUrl: './word-card-deck.component.html',
  styleUrls: ['./word-card-deck.component.scss'],
})
export class WordCardDeckComponent implements OnInit {

  constructor(private zone: NgZone, private logger: NGXLogger) {
    console.log(`MFE Zone: ${this.zone}`);
  }

  @Input() parentData: any;
  @Output() newItemEvent: EventEmitter<string> = new EventEmitter<string>();

  
  ngOnInit(): void {
    console.log(this.parentData);
    this.logger.log("MFE NGXLogger")
  }

  addNewItem(value: string) {
    console.log(value)
    this.newItemEvent.emit(value);
  }

}
