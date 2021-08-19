import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheMainComponent } from './components/layout/the-main/the-main.component';
import { TheNavbarComponent } from './components/layout/the-navbar/the-navbar.component';
import { TheHeaderComponent } from './components/layout/the-header/the-header.component';
import { TheContentComponent } from './components/layout/the-content/the-content.component';
import { ContentComponent } from './view/employee/content/content.component';
import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';
import { HeaderComponent } from './view/employee/header/header.component';
import { ToolBarComponent } from './view/employee/tool-bar/tool-bar.component';
import { EmployeeListComponent } from './view/employee/employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaddingIconComponent } from './components/common/loadding-icon/loadding-icon.component';
import { DropFunctionComponent } from './components/common/drop-function/drop-function.component';
import { EmployeeDetailComponent } from './view/employee/employee-detail/employee-detail.component';
import { BaseInputComponent } from './components/common/input/base-input/base-input.component';
import { DatetimePickerComponent } from './components/common/input/datetime-picker/datetime-picker.component';
import { ComboboxInputComponent } from './components/common/input/combobox-input/combobox-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TheMainComponent,
    TheNavbarComponent,
    TheHeaderComponent,
    TheContentComponent,
    ContentComponent,
    PageNotFoundComponent,
    HeaderComponent,
    ToolBarComponent,
    EmployeeListComponent,
    LoaddingIconComponent,
    DropFunctionComponent,
    EmployeeDetailComponent,
    BaseInputComponent,
    DatetimePickerComponent,
    ComboboxInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LOCALE_ID, useValue: "en-US"
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
