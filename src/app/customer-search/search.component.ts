import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinct, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Customer } from '../customer';
import { CustomerService} from "../customer.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [
    '../styles/bootstrap-4.0.0-dist/css/bootstrap.css',
    './search.component.css'
  ]
})
export class SearchComponent implements OnInit {
  customers$: Observable<Customer[]>;
  private searchTerms = new Subject<String>();

  constructor(private customerService: CustomerService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.customers$ = this.searchTerms
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((term: string) => this.customerService.searchCustomers(term))
      );
  }

}
