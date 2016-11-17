import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SettingsService } from '../shared/settings.service';

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  providers: [SettingsService]
})
export class AppComponent implements OnInit {
  constructor(private titleService: Title, private settingsService: SettingsService) { }

  ngOnInit(): void {
    this.setTitle('My App');
    this.settingsService.getConfigFile().then((data) => {
        console.log('data', data);
    });
  }

  setTitle(title: string): void {
    this.titleService.setTitle(title);
  }
}
