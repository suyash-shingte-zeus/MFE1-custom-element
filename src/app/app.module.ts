import { ApplicationRef, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordCardDeckComponent } from './dm-content/word-card-deck/word-card-deck.component';
import { DmContentModule } from './dm-content/dm-content.module';
import { FlashCardDeckComponent } from './dm-content/flash-card-deck/flash-card-deck.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DmContentModule
  ],
  providers: [],
  bootstrap: [] //Do not bootstrap any component
})
export class AppModule {
  constructor(private injector: Injector) {
    if (!customElements.get('app-word-card-deck')) {
      const appAngularLoaderComponent = createCustomElement(WordCardDeckComponent, {injector: injector})
      customElements.define('app-word-card-deck', appAngularLoaderComponent)
    }
    if (!customElements.get('app-flash-card-deck')) {
      const appAngularLoaderComponent = createCustomElement(FlashCardDeckComponent, {injector: injector})
      customElements.define('app-flash-card-deck', appAngularLoaderComponent)
    }
  }
  ngDoBootstrap(appRef: ApplicationRef) {
  } // dont bootstrap any component here. This app module is only for exposing custom elements using Module Federation.
 }
