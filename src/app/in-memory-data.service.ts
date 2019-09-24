import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Customer } from './customer';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const customers = [
      {id: 1, name: 'Antonio Augusto', email: 'antonio@io.com', cpf: '011281909-30', address: 'Rua Zero 12'},
      {id: 2, name: 'Antonia Barcelo', email: 'antonia@io.com', cpf: '013451909-30', address: 'Rua Zero 19'},
      {id: 3, name: 'Bernardo Number', email: 'bernardo@io.com', cpf: '089281909-45', address: 'Rua Doze 29'}
    ];
    return {customers};
  }

  genId(customers: Customer[]): number {
    return customers.length > 0 ? Math.max(...customers.map(hero => hero.id)) + 1 : 1;
  }
}
