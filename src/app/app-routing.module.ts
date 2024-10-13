import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListInvoiceComponent } from './list-invoice/list-invoice.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SettingsComponent } from './settings/settings.component';
import { NewInvoiceComponent } from './new-invoice/new-invoice.component';
import { BlankLayoutComponent } from './previewer-layout/previewer-layout.component';
import { LayoutGuard } from './layout.guard';
import { AuthGuardGuard } from './auth-guard.guard';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: '', component: NewInvoiceComponent, canActivate: [AuthGuardGuard] },
  {
    path: 'all-invoices',
    component: ListInvoiceComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'all-contacts',
    component: ListContactComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'login',
    component: AuthComponent,
    canActivate: [LayoutGuard],
    data: { skipLayout: true },
  },
  {
    path: 'statistics',
    component: StatisticsComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuardGuard],
  },
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
