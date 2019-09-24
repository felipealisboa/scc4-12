  import { Component, OnInit } from '@angular/core';
import { Customer } from "../customer";
import { CustomerService} from "../customer.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    '../styles/bootstrap-4.0.0-dist/css/bootstrap.css',
    './dashboard.component.css'
  ]
})
export class DashboardComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.getCustomer(1)
      .subscribe();
  }

}
