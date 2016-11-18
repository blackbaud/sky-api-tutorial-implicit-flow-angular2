import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SkyModule } from 'blackbaud-skyux2/dist/core';
import { HttpModule } from '@angular/http';
import { SessionService } from '../shared/session.service';
import { SettingsService } from '../shared/settings.service';
import { AppRoutingModule } from '../shared/app-routing.module';
import { TokenComponent } from '../token/token.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    SkyModule
  ],
  declarations: [
    AppComponent,
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
