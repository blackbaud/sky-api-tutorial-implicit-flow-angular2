import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  template: require('./app.component.html')
})
export class AppComponent implements OnInit {
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.setTitle('My App');
  }

  setTitle(title: string): void {
    this.titleService.setTitle(title);
  }
}
