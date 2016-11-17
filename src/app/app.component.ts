import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SessionService } from '../shared/session.service';
import { SettingsService } from '../shared/settings.service';

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  providers: [
    SessionService,
    SettingsService
  ]
})
export class AppComponent implements OnInit {
  constructor(
    private titleService: Title,
    private sessionService: SessionService,
    private settingsService: SettingsService
  ) { }

  ngOnInit(): void {
    this.setTitle('My App');
    this.settingsService.getConfigFile().then((data: any) => {
        this.sessionService.login();
    });
  }

  setTitle(title: string): void {
    this.titleService.setTitle(title);
  }
}
