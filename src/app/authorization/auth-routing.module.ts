import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {AuthComponent} from './auth/auth.component';
import {ErrorComponent} from '../error/error.component';
import {AuthSelectComponent} from './auth-select/auth-select.component';
import {PasswordResetComponent} from './password-reset/password-reset.component';


const routes: Routes = [
  {
    path: '', component: AuthComponent, children: [
      {path: '', component: AuthSelectComponent},
      {path: 'signin', component: SignInComponent},
      {path: 'signup', component: SignUpComponent},
      {path: 'passReset', component: PasswordResetComponent},
      {path: '**', component: ErrorComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule {
}
