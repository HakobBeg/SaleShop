import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {AuthComponent} from './auth/auth.component';


const routes: Routes = [
  {
    path: '', component: AuthComponent, children: [
      {path: 'signIn', component: SignInComponent},
      {path: 'signUp', component: SignUpComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule {
}
