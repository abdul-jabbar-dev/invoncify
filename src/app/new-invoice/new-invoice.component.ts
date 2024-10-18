import { NewServiceComponent } from 'src/components/new-invoice-component/new-service/new-service.component';
import { TUser } from '../types/user.model';
import { UsersService } from './../services/users.service';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { PrepaymentsComponent } from 'src/components/new-invoice-component/prepayments/prepayments.component';
import { CreateNewComponent } from 'src/components/new-invoice-component/create-new/create-new.component';
import { TInvoice } from '../types/invoice.model';
import { AuthService } from '../services/auth.service';
import { User } from 'firebase/auth';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NewInvoiceComponent implements OnInit {
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
  subjectUser: User | null = null;
  inVisible: boolean = true;

  handleHideParent() {
    this.inVisible = false;
  }
  constructor(
    private Users: UsersService,
    protected auth: AuthService,
    protected http: RequestService
  ) {
    auth.user$.subscribe((user) => (this.subjectUser = user));
  }

  ngOnInit(): void {
    this.auth.user$.subscribe((user) => (this.subjectUser = user));
    if (!(this.subjectUser && this.subjectUser['phoneNumber'])) {
      this.inVisible = true;
    }
  }

  loadUsers() {
    this.Users.getAllUsers().subscribe((obs) => {
      this.users = obs;
    });
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
      prepayments:
        this.PrepaymentsComponent.listOfData &&
        Object.values(this.PrepaymentsComponent.listOfData as object),
    };

    this.http.post('/invoice/new', newInvoice, {}, true).subscribe({
      next: (response) => {
        console.log('Response received:', response);
      },
      error: (err) => {
        console.error('Error occurred:', err);
      },
    });
  }
}
