import { Component } from '@angular/core';
import { SessionService } from '../../shared/session.service';

@Component({
  selector: 'auth-home',
  template: require('./home.component.html')
})
export class HomeComponent {
  constructor(private sessionService: SessionService) { }
  isAuthenticated: Boolean = this.sessionService.isAuthenticated();
}
