import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { TokenComponent } from '../token/token.component';

const routes: Routes = [
  { path: '', redirectTo: '/home' },
  { path: 'home', component: AppComponent },
  { path: 'access_token', component: TokenComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
