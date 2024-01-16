import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordCardDeckComponent } from './word-card-deck.component';

describe('WordCardDeckComponent', () => {
  let component: WordCardDeckComponent;
  let fixture: ComponentFixture<WordCardDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordCardDeckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordCardDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
