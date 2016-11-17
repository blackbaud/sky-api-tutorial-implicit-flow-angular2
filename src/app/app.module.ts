import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SkyModule } from 'blackbaud-skyux2/dist/core';
import { HttpModule } from '@angular/http';
import { SettingsService } from '../shared/settings.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    SkyModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    SettingsService,
    Title
  ]
})
export class AppModule { }
