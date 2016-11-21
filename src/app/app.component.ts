import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SettingsService } from '../shared/settings.service';

@Component({
  selector: 'my-app',
  template: require('./app.component.html')
})
export class AppComponent implements OnInit {
  constructor(
    private titleService: Title,
    private settingsService: SettingsService
  ) { }
  isReady: Boolean = false;

  public ngOnInit(): void {
    this.setTitle('Implicit Flow Tutorial');
    this.settingsService.getConfigFile().then(() => {
      this.isReady = true;
    });
  }

  public setTitle(title: string): void {
    this.titleService.setTitle(title);
  }
}
