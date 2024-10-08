import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListInvoiceComponent } from './list-invoice/list-invoice.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SettingsComponent } from './settings/settings.component';
import { NewInvoiceComponent } from './new-invoice/new-invoice.component';
import { BlankLayoutComponent } from './previewer-layout/previewer-layout.component';
import { LayoutGuard } from './layout.guard';

const routes: Routes = [
  { path: '', component: NewInvoiceComponent },
  { path: 'all-invoices', component: ListInvoiceComponent },
  { path: 'all-contacts', component: ListContactComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'settings', component: SettingsComponent },
  {
    path: 'previewer/:id',
    component: BlankLayoutComponent,
    canActivate: [LayoutGuard],
    data: { skipLayout: true },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
