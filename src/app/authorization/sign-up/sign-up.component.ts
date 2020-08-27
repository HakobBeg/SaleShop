import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthServiceService} from '../../Services/auth-service.service';
import {UserService} from '../../Services/user.service';
import {User} from '../../Models/user-model';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(private auth: AuthServiceService, private user: UserService) {
  }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      login: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required),
      passConfirm: new FormControl('', Validators.required),
    });
  }

  submit(): void {
    this.auth.register(this.signUpForm.value).subscribe((response) => {
      console.log(response);
    });
  }
}
