import { Component, OnInit } from '@angular/core';
import { AddNewUser } from '../../../../model/addnewUser';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent implements OnInit {

  newUser = new AddNewUser();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
