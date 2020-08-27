import {Component, OnInit, } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthServiceService} from '../../Services/auth-service.service';
import {UserService} from '../../Services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {



  constructor(private auth: AuthServiceService, private user: UserService) {
  }

  signInForm: FormGroup;


  ngOnInit(): void {

    this.signInForm = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

  }

  submit(): void {

  }


}
