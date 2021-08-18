import { NgModule } from '@angular/core';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
