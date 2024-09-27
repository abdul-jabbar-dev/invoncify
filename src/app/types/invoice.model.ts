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
