import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {AuthRoutingModule} from './auth-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthComponent} from './auth/auth.component';
import { AuthSelectComponent } from './auth-select/auth-select.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';

export function getAuthModule(): AuthorizationModule {
  return AuthorizationModule;
}

@NgModule({
  declarations: [
    AuthComponent,
    SignInComponent,
    SignUpComponent,
    AuthSelectComponent,
    PasswordResetComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ],
  exports: []
})


export class AuthorizationModule {
}
