import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from "./customer/customer.component";
import {UploadComponent} from "./upload/upload.component";
import { MessagesComponent} from "./message/message.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import { FeedFormComponent} from "./feed-form/feed-form.component";
import { FeedComponent} from "./feed/feed.component";


import {CustomerDetailComponent} from "./customer-detail/customer-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: CustomerDetailComponent},
  { path: 'customers', component: CustomerComponent},
  { path: 'upload', component: UploadComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'new', component: FeedFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
