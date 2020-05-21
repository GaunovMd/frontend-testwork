import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { IAppState } from "src/app/shared/store/reducers";
import { selectIsEventPageLoading } from "src/app/shared/store/selectors/root.selectors";

import { addNewEventAction } from "../../../shared/store/actions/root.actions";

@Component({
  selector: "app-add-event-page",
  templateUrl: "./add-event-page.component.html",
  styleUrls: ["./add-event-page.component.scss"],
})
export class AddEventPageComponent implements OnInit {

  isLoading$: Observable<boolean> = this.store.select(selectIsEventPageLoading);

  eventForm: FormGroup;

  constructor(
    private store: Store<IAppState>,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.eventForm = this.formBuilder.group({
      name: ["", Validators.required],
      address: ["", Validators.required],
      date: ["", Validators.required],
    });
  }

  submitForm(): void {
    if (this.eventForm.valid) {
      this.store.dispatch(addNewEventAction({
        object: {
          ...this.eventForm.value,
          id: Math.random().toString(36).substring(2, 15),
        },
      }));
    }
  }
}
