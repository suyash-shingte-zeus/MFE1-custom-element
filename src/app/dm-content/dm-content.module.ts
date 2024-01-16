import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordCardDeckComponent } from './word-card-deck/word-card-deck.component';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { FlashCardDeckComponent } from './flash-card-deck/flash-card-deck.component';



@NgModule({
  declarations: [
    WordCardDeckComponent,
    FlashCardDeckComponent
  ],
  imports: [
    CommonModule,
    LoggerModule.forRoot({
      level: NgxLoggerLevel.DEBUG,
    })
  ], 
  exports: [
    WordCardDeckComponent,
    FlashCardDeckComponent      
  ]
})
export class DmContentModule { }
