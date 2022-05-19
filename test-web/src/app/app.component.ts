import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Customer } from './model/api';
import { CustomerService } from './service/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DialogService],
})
export class AppComponent {
  title = 'Customers';
  customers: Customer[] = [];
  display: boolean = false;
  customer: Partial<Customer> = {};
  isDisabled = true;
  dialogTitle: string | undefined;
  nextId = 0;

  constructor(
    private customerService: CustomerService,
    public dialogService: DialogService
  ) {}

  first = 0;

  rows = 10;

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.customers
      ? this.first === this.customers.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.customers ? this.first === 0 : true;
  }

  ngOnInit() {
    this.displayCustomers();
  }

  getEventValue($event: any): string {
    return $event.target.value;
  }

  // Display customer list from server
  displayCustomers() {
    this.customerService.getCustomers().subscribe((response) => {
      this.customers = response;
      this.nextId =
        this.customers.reduce((acc, cur) => (acc.id > cur.id ? acc : cur)).id +
        1;
    });
  }

  // Dialog to add a customer
  addCustomer() {
    this.display = true;
    this.customer = {};
    this.isDisabled = false;
    this.dialogTitle = 'Add new customer';
  }

  // Dialog to show customer information
  showCustomer(data: any) {
    this.display = true;
    this.customer = data;
    this.isDisabled = true;
    this.dialogTitle = 'Customer Information';
  }

  // Post new customer to server
  addNewCustomer(newCustomer: Customer) {
    this.customerService.postCustomer(newCustomer).subscribe((response) => {
      this.displayCustomers(); // immediately display added customer
      this.display = false; // close the dialog
    });
  }
}
