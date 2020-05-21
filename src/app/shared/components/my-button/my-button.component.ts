import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "app-my-button",
  templateUrl: "./my-button.component.html",
  styleUrls: ["./my-button.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyButtonComponent {

  @Input() label: string;
  @Input() isDisabled = false;

  constructor() { }
}
