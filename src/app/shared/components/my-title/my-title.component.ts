import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-my-title",
  styleUrls: ["./my-title.component.scss"],
  templateUrl: "./my-title.component.html",
})
export class MyTitleComponent {

  @Input() titleText: string;
  @Input() displayBackButton = false;

  constructor(private router: Router) {
  }

  onClickBack(): void {
    this.router.navigate(["/home"]);
  }
}
