//Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

//Libraries
import { SkyModule } from 'blackbaud-skyux2/dist/core';

// Local Services
import { SessionService } from '../shared/session.service';
import { SettingsService } from '../shared/settings.service';
import { AppRoutingModule } from '../shared/app-routing.module';

// Local Components
import { AppComponent } from './app.component';
import { HomeComponent } from '../components/home/home.component';
import { ConstituentComponent } from '../components/constituent/constituent.component';
import { LoginComponent } from '../components/login/login.component';
import { TokenComponent } from '../components/token/token.component';

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
    SettingsService
  ]
})
export class AppModule { }
