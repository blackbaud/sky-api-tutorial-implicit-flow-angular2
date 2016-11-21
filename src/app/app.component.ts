import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../shared/settings.service';

@Component({
  selector: 'my-app',
  template: require('./app.component.html')
})
export class AppComponent implements OnInit {
  constructor(
    private settingsService: SettingsService
  ) { }
  isReady: Boolean = false;

  public ngOnInit(): void {
    this.settingsService.getConfigFile().then(() => {
      this.isReady = true;
    });
  }
}
