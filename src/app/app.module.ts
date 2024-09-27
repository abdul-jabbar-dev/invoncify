import { CreatePrepaymentComponent } from '../components/new-invoice-component/prepayments/create-prepayment/create-prepayment.component';
import { PrepaymentsComponent } from './../components/new-invoice-component/prepayments/prepayments.component';
import { CreateServiceComponent } from '../components/new-invoice-component/new-service/create-service/create-service.component';
import { NewServiceComponent } from './../components/new-invoice-component/new-service/new-service.component';
import { CreateNewComponent } from './../components/new-invoice-component/create-new/create-new.component';
import { SidebarComponent } from './../components/layout/sidebar/sidebar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewInvoiceComponent } from './new-invoice/new-invoice.component';
import { ListInvoiceComponent } from './list-invoice/list-invoice.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SettingsComponent } from './settings/settings.component';
import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { GenericLayoutComponent } from 'src/components/layout/generic-layout/generic-layout.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { InvoiceCardComponent } from 'src/components/list-invoice-component/invoice-card/invoice-card.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { LineChirtComponent } from 'src/components/chart/line-chirt/line-chirt.component';
import { PieChirtComponent } from 'src/components/chart/pie-chirt/pie-chirt.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { ProfileSettingComponent } from 'src/components/settings/profile-setting/profile-setting.component';
import { InvoiceSettingComponent } from 'src/components/settings/invoice-setting/invoice-setting.component';
import { GeneralSettingComponent } from 'src/components/settings/general-setting/general-setting.component';
import { ToggleOptionsComponent } from 'src/components/common/toggle-options/toggle-options.component';
import { PreviewerComponent } from './previewer-layout/previewer/previewer.component';
import { BlankLayoutComponent } from './previewer-layout/previewer-layout.component';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NewInvoiceOptionsComponent } from 'src/components/new-invoice-component/new-invoice-options/new-invoice-options.component';
registerLocaleData(en);
const ngZorroConfig: NzConfig = {
  message: { nzTop: 120 },
  notification: { nzTop: 240 },
};
@NgModule({
  declarations: [
    PrepaymentsComponent,
    AppComponent,
    NewInvoiceComponent,
    ListInvoiceComponent,
    ListContactComponent,
    StatisticsComponent,
    SettingsComponent,
    SidebarComponent,
    GenericLayoutComponent,
    CreateNewComponent,
    NewServiceComponent,
    CreateServiceComponent,
    PrepaymentsComponent,
    CreatePrepaymentComponent,
    InvoiceCardComponent,
    LineChirtComponent,
    PieChirtComponent,
    ProfileSettingComponent,
    InvoiceSettingComponent,
    GeneralSettingComponent,
    ToggleOptionsComponent,
    PreviewerComponent,
    BlankLayoutComponent,
    NewInvoiceOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzIconModule,
    NzCheckboxModule,
    NzButtonModule,
    NzCollapseModule,
    NzSwitchModule,
    NzRadioModule,
    NzSelectModule,
    NzFormModule,
    ReactiveFormsModule,
    DragDropModule,
    NzPopoverModule,
    CanvasJSAngularChartsModule,
    NzTabsModule,
    NzSliderModule,
    NzTableModule,
  ],
  providers: [
    { provide: NZ_CONFIG, useValue: ngZorroConfig },
    { provide: NZ_I18N, useValue: en_US },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
