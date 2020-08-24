import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthorizationModule} from './authorization/authorization.module';

const routes: Routes = [
  {path: 'auth', loadChildren: () => AuthorizationModule}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
