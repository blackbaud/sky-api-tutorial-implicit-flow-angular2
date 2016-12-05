//Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

//Libraries
import { SkyModule } from 'blackbaud-skyux2/dist/core';

// Local Services
import { SessionService } from '../shared/session.service';
import { SettingsService } from '../shared/settings.service';
import { AppRoutingModule } from './app-routing.module';

// Local Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConstituentComponent } from './constituent/constituent.component';
import { LoginComponent } from './login/login.component';
import { TokenComponent } from './token/token.component';

/**
 * Registers the core app module and loads the other components, providers (services), and dependencies.
 */
@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    SkyModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ConstituentComponent,
    HomeComponent,
    LoginComponent,
    TokenComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    SessionService,
    SettingsService,
    Title
  ]
})
export class AppModule { }
