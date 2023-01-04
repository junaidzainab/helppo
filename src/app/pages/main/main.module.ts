import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
// import { BrowserModule } from '@angular/platform-browser';
// import { NZ_I18N } from 'ng-zorro-antd/i18n';
// import { en_US } from 'ng-zorro-antd/i18n';
// import { registerLocaleData } from '@angular/common';
// import en from '@angular/common/locales/en';
// import { AppRoutingModule } from 'src/app/app-routing.module';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransationComponent } from './transation/transation.component';
import { AccountComponent } from './account/account.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTableModule } from 'ng-zorro-antd/table';
// import {MatFormFieldModule} from '@angular/material/form-field';


// registerLocaleData(en);

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    TransationComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    // BrowserModule,
    // AppRoutingModule,
    // FormsModule,
    // HttpClientModule,
    // BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzGridModule,
    NzTableModule,
    // MatFormFieldModule
  ],
  exports: [MainComponent]
  // providers: [{ provide: NZ_I18N, useValue: en_US }],
  // bootstrap: [AppComponent]
})
// })
export class MainModule { }
