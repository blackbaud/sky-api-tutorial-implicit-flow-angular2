//Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

//Libraries
import { SkyModule } from 'blackbaud-skyux2/dist/core';


// Local Services
import { SessionService } from '../shared/session.service';
import { SettingsService } from '../shared/settings.service';
import { AppRoutingModule } from '../shared/app-routing.module';
import { ConstituentService } from '../shared/constituent.service';

// Local Components
import { AppComponent } from './app.component';
import { HomeComponent } from '../components/home/home.component';
import { TokenComponent } from '../components/token/token.component';
import { LoginComponent } from '../components/login/login.component';
import { ConstituentComponent } from '../components/constituent/constituent.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    SkyModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    TokenComponent,
    ConstituentComponent,
    LoginComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    SessionService,
    SettingsService,
    Title
  ]
})
export class AppModule { }
