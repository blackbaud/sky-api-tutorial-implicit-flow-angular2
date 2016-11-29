import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TokenComponent } from './token/token.component';

/**
*  Create an array of configuration objects for each route. (eg. at the path 'home', we tell the Router to use and load our HomeComponent.)
*/
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'access_token/:token', component: TokenComponent },
  { path: '**', redirectTo: '/' }
];

/**
*  Use the NgModule decorator to create a new module. Importing our RouterModule.forRoute method
*  and passing in the routes we defined above, then exporting our complete RouterModule. This decorator
*  attaches the created metadata to our AppRoutingModule class we define below.   
*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
