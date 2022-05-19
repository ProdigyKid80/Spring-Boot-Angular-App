import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Customer } from '../model/api';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  @Input() customer: Partial<Customer> = {};
  @Input() isDisabled = true;
  @Input() nextId: number = 0;

  @Output() public customerEvent = new EventEmitter<any>();

  emailPattern = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$';

  onSubmit(addCustomerForm: NgForm): void {
    if (addCustomerForm.status == 'INVALID') {
      alert('Incorrect data entered.');
    } else {
      const id = this.nextId;
      const name = addCustomerForm.controls['name'].value.trim();
      const surname = addCustomerForm.controls['surname'].value.trim();
      const dob = new Date(
        addCustomerForm.controls['dob'].value
      ).toLocaleDateString('en-CA');
      const phone = addCustomerForm.controls['phone'].value.trim();
      const email = addCustomerForm.controls['email'].value.trim();

      const newCustomer = { id, name, surname, dob, phone, email };

      this.customerEvent.emit(newCustomer);

      alert('Successfully added a customer');

      addCustomerForm.resetForm();
    }
  }

  ngOnInit(): void {}
}
