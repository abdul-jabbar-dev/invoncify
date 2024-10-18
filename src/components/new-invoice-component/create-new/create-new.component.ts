import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css'],
})
export class CreateNewComponent {
  constructor() {}
  newContact = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    company: new FormControl<string>('', Validators.required),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl<string>('', Validators.required),
    address: new FormControl<string>('', Validators.required),
  });
}
