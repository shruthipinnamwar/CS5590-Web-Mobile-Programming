import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

import {ApiService} from '../api.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customerForm: FormGroup;
  id = '';
  name: object = {
    first: <string>'',
    last: <string>''
  };
  gender = '';
  birthday = '';
  lastContact = '';
  customerLifetimeValue = '';

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.getCustomer(this.route.snapshot.params['id']);
  }

  getCustomer(id) {
    /*** Get the Customer Details*/
  }

  onFormSubmit() {
    /*** On form submit update the customer details*/
  }
}
