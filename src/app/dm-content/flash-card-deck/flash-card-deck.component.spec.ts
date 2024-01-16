import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashCardDeckComponent } from './flash-card-deck.component';

describe('FlashCardDeckComponent', () => {
  let component: FlashCardDeckComponent;
  let fixture: ComponentFixture<FlashCardDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashCardDeckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashCardDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
