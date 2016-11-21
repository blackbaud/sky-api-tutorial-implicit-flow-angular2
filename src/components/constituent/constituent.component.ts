import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ConstituentService } from './constituent.service';
import { SessionService } from '../../shared/session.service';

@Component({
  selector: 'constituent',
  template: require('./constituent.component.html'),
  providers: [ConstituentService]
})
export class ConstituentComponent implements OnInit {
  private constituent_id: number = 280;
  public constituent: any;

  constructor(
    private constituentService: ConstituentService,
    private sessionService: SessionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.constituentService.getById(this.constituent_id)
      .then((res: any )=> {
        this.constituent = res;
      })
      .catch(this.handleError)
  }

  logout(): void {
    this.sessionService.logout();
  }

  private handleError(error: any): void {
    console.log('ERROR:', error.message || error);
    Promise.resolve(error);
  }
}
