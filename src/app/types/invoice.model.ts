import { EInvoiceStatus } from './enums';
import { TUser } from './user.model';

export interface TInvoice {
  id?: string;
  client: TUser | string;
  products: TInvoiceProducts[];
  prepayments?: TInvoicePrepayments[];
  invoiceStatus?: EInvoiceStatus;
  invoiceOptions?: TInvoiceOptions;
}
// export interface TInvoice {
//   id?: string;
//   clientId: string;
//   authorId: string;
//   products: TInvoiceProducts[];
//   prepayments?: TInvoicePrepayments[];
//   invoiceStatus?: EInvoiceStatus;
//   invoiceOptions?: TInvoiceOptions;
// }

export interface TInvoiceOptions {
  currency?: string;
  separator?: string;
  signPlacement?: string;
  decimalFraction?: number;
}

export interface TInvoiceProducts {
  description: string;
  price: number;
  quantity: number;
}

export interface TInvoicePrepayments {
  description: string;
  price: number;
}
export interface IInvoiceStatusCombination {
  bg: string;
  border: string;
  color: string;
  icon: string;
  id: string;
  status: 'PENDING' | 'PAID' | 'CANCELLED' | 'REFUNDED'; // Add other statuses as needed
}

export type ICurrencySettings = {
  currency: string;
  decimalFraction: string;
  separator: string;
  signPlacement: 'before' | 'after';
};

export type IFormSettings = {
  currency: boolean;
  discount: boolean;
  dueDate: boolean;
  invoiceId: boolean;
  note: boolean;
  tax: boolean;
};

export interface RInvoice {
  id: string;
  client_email: string;
  client_id: string;
  client_address: string;
  client_company: string;
  client_phoneNumber: string;
  client_name: string;
  invoice_id: number;
  meta: {
    creationDate: string;
    currencySettings: ICurrencySettings;
    formSettings: IFormSettings;
  };
  prePayments: null | number | TInvoicePrepayments[];
  products: TInvoiceProducts[];
  source_email: string;
  source_id: string;
  source_name: string;
  status: 'PENDING' | 'PAID' | 'CANCELLED';
  statusCombination: IInvoiceStatusCombination;
}
