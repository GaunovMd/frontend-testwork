import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { IEventCard } from '../../interfaces/event-card.interface';
import { monthNames } from '../../constants/month.constant';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventCardComponent {

  @Input() cardData: IEventCard;
  @Input() isButton = false;
  @Input() isPreviewMode = false;

  constructor() { }

  getHumanDate(date: Date): string {
    if (date) {
      const eventDate = new Date(date);
      return `${eventDate.getDate()} ${monthNames[eventDate.getMonth() + 1]}`;
    }
    return '';
  }

  handleAddNewCardClick(): void {
    window.location.href = '/add-event';
  }

  handleCardClick(): void {
    if (this.isPreviewMode) {
      return;
    }
    console.log(' : EventCardComponent -> handleEditCardClick -> void');
  }
}
