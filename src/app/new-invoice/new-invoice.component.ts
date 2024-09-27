import { NewServiceComponent } from 'src/components/new-invoice-component/new-service/new-service.component';
import { TUser } from '../types/user.model';
import { UsersService } from './../services/users.service';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { PrepaymentsComponent } from 'src/components/new-invoice-component/prepayments/prepayments.component';
import { CreateNewComponent } from 'src/components/new-invoice-component/create-new/create-new.component';
import { TInvoice } from '../types/invoice.model';

@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NewInvoiceComponent {
  @ViewChild(NewServiceComponent) NewServiceComponent!: NewServiceComponent;
  @ViewChild(PrepaymentsComponent) PrepaymentsComponent!: PrepaymentsComponent;
  @ViewChild(CreateNewComponent) CreateNewComponent!: CreateNewComponent;

  isInvoice: any;
  isDueDate: any;
  isCurrency: any;
  isDiscount: any;
  isTax: any;
  isNote: any;
  isPayment: any;
  selectedContact: any;
  isNewContact: boolean = true;
  users: TUser[] = [];

  constructor(private Users: UsersService) {}

  loadUsers() {
    this.Users.getAllUsers().subscribe((obs) => (this.users = obs));
  }
  createUser() {
    this.users = [];
  }

  saveInvoice() {
    let newInvoice: TInvoice = {
      client:
        (!this.isNewContact && this.selectedContact) ||
        this.CreateNewComponent.newContact.getRawValue(),
      products: Object.values(this.NewServiceComponent.listOfData as object),
      prepayments: Object.values(
        this.PrepaymentsComponent.listOfData as object
      ),
    };

    console.log(newInvoice);
  }
}
