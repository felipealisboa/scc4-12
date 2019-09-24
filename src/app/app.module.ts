import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomerComponent } from './customer/customer.component';
import { UploadComponent } from './upload/upload.component';
import { ChatComponent } from './chat/chat-app-server/newMessages/chat.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './customer-search/search.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import {FormsModule} from "@angular/forms";
import { MessagesComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustomerComponent,
    UploadComponent,
    ChatComponent,
    DashboardComponent,
    SearchComponent,
    CustomerDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
