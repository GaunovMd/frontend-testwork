import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-title',
  templateUrl: './my-title.component.html',
  styleUrls: ['./my-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyTitleComponent {

  @Input() titleText: string;
  @Input() displayBackButton = false;

  constructor(private router: Router) {
  }

  onClickBack() {
    this.router.navigate(['/home']);
  }
}
