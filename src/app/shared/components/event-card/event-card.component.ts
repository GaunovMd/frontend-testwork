import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { IEventCard } from '../../interfaces/event-card.interface';
import { monthNames } from '../../constants/month.constant';
import { Router } from '@angular/router';

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

  picUrl = 'https://ngrx.io/assets/images/badge.svg';

  constructor(private router: Router) { }

  getHumanDate(date: Date): string {
    if (date) {
      const eventDate = new Date(date);
      return `${eventDate.getDate()} ${monthNames[eventDate.getMonth() + 1]}`;
    }
    return '';
  }

  handleAddNewCardClick(): void {
    this.router.navigate(['/add-event']);
  }
}
