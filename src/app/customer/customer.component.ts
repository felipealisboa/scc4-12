import {Component, Input, OnInit} from '@angular/core';

import { Customer} from "../customer";
import { CustomerService} from "../customer.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: [
    '../styles/bootstrap-4.0.0-dist/css/bootstrap.css',
    './customer.component.css'
  ]
})
export class CustomerComponent implements OnInit {

  customers: Customer[];

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.getCustomers()
      .subscribe(customers => this.customers = customers);
  }

  add(name: string, email: string, cpf: string, address: string): void {
    name = name.trim();
    email = email.trim();
    cpf = cpf.trim();
    address = address.trim();

    if (!name || !email || !cpf || !address) {
      return;
    }
    this.customerService.addCustomer({name, email, cpf, address} as Customer)
      .subscribe(customer => {
        this.customers.push(customer);
      });
  }

  delete(customer: Customer): void {
    this.customers = this.customers.filter(h => h != customer);
    this.customerService.deleteCustomer(customer).subscribe();
  }
}

