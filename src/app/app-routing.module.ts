import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TokenComponent } from './token/token.component';

/**
 *  Creates an array of route configuration objects. For example, at the path 'home', tells the router to use the HomeComponent.
 */
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'access_token/:token', component: TokenComponent },
  { path: '**', redirectTo: '/' }
];

/**
 *  Uses the NgModule decorator to create an Angular 2 module. Imports the RouterModule.forRoot method
 *  and passes in the routes defined above, then exports the complete RouterModule. The decorator
 *  attaches the module metadata to the AppRoutingModule class defined below.   
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
