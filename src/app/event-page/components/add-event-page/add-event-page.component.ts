import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/shared/store/reducers';
import { addNewEventAction } from '../../../shared/store/actions/root.actions';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { selectIsEventPageLoading } from 'src/app/shared/store/selectors/root.selectors';
import { IEventCard } from 'src/app/shared/interfaces/event-card.interface';

@Component({
  selector: 'app-add-event-page',
  templateUrl: './add-event-page.component.html',
  styleUrls: ['./add-event-page.component.scss']
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
      name: ['', Validators.required],
      address: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  submitForm(): void {
    if (this.eventForm.valid) {
      this.store.dispatch(addNewEventAction({
        object: {
          ...this.eventForm.value,
          id: Math.random().toString(36).substring(2, 15),
        }
      }));
    }
  }
}
