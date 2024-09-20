import { Component } from '@angular/core';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css'],
})
export class CreateNewComponent {
  onSubmit() {
    throw new Error('Method not implemented.');
  }
  fullName: any;
  company: any;
  email: any;
  phoneNumber: any;
  address: any;
}
