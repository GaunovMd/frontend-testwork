import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventCardComponent implements OnInit {

  @Input() isButton = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleAddNewCardClick(): void {
  console.log(' : EventCardComponent -> handleAddNewCardClick -> void');
  }

  handleEditCardClick(): void {
  console.log(' : EventCardComponent -> handleEditCardClick -> void');
  }
}
