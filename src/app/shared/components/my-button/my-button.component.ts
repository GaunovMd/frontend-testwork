import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-my-button",
  styleUrls: ["./my-button.component.scss"],
  templateUrl: "./my-button.component.html",
})
export class MyButtonComponent {

  @Input() label: string;
  @Input() isDisabled = false;

  constructor() {}
}
