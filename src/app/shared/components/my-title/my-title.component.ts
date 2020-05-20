import { Location } from '@angular/common';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-my-title',
  templateUrl: './my-title.component.html',
  styleUrls: ['./my-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyTitleComponent {

  @Input() titleText: string;
  @Input() isHaveBackButton = false;

  constructor(private location: Location) {
  }

  onClickBack() {
    this.location.back();
  }
}
