import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Customer } from "../customer";
import { CustomerService } from "../customer.service";

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: [
    '../styles/bootstrap-4.0.0-dist/css/bootstrap.css',
    './customer-detail.component.css'
  ]
})
export class CustomerDetailComponent implements OnInit {
  @Input() customer: Customer;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.customerService.getCustomer(id)
      .subscribe(customer => this.customer = customer);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.customerService.updateCustomer(this.customer)
      .subscribe(() => this.goBack());
  }
}
