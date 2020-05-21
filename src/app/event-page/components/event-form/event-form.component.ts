import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-event-form",
  styleUrls: ["./event-form.component.scss"],
  templateUrl: "./event-form.component.html",
})
export class EventFormComponent {

  @Input() eventForm: FormGroup;

  constructor() {}
}
