import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../shared/session.service';

@Component({
  selector: 'auth-home',
  template: require('./home.component.html')
})
export class HomeComponent implements OnInit {
  public isAuthenticated: boolean;

  constructor(
    private sessionService: SessionService) { }

  public ngOnInit(): void {
    this.isAuthenticated = this.sessionService.isAuthenticated();
  }
}
