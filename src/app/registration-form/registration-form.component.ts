import {
    Component,
    OnInit,
    ViewChild
} from '@angular/core';
import { Signup } from '../models/sign-up';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {

  }

  model: Signup = new Signup();
  @ViewChild('f') form: any;

  langs: string[] = [
    'English',
    'French',
    'German',
  ];

  onSubmit() {
    if (this.form.valid) {
      console.log("Form Submitted!");
      this.form.reset();
    }
  }

  dataChanged(value) {
    if (value.length == 2) {
      this.model.age = value + ' Years';
    }
  }

}
