import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../shared/session.service';
import { Location } from '@angular/common';

@Component ({
  selector: 'token',
  template: require('./token.component.html'),
  providers: [
    Router,
    SessionService
  ]
})
export class TokenComponent implements OnInit {
  constructor(
    private location: Location,
    private hash: String = location.path().substr(1),
    private hashArray: Array<String> = hash.split('&'),
    private hashPairs: Object = {},
    private router: Router,
    private sessionService: SessionService
  ) { }

  ngOnInit() {
    this.hashArray.forEach((hash) => {
      let obj = hash.split('=');
      this.hashPairs[obj[0]] = obj[1];
    });

    this.sessionService.setToken(this.hashPairs);
    this.router.navigate(['/home']);
  }
}
