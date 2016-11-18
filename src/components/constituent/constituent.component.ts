import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../shared/session.service';
import { ConstituentService } from '../../shared/constituent.service';

@Component({
  selector: 'constituent',
  template: require('./constituent.component.html')
})
export class ConstituentComponent {
  private constituent_id: number = 280;
  protected constituent_data: any;

  constructor(
    private constituentService: ConstituentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.constituentService.getById(this.constituent_id)
        .then((res: any )=> {
          this.constituent_data = res.data
        })
        .catch(this.handleError)
  }

  private handleError(error: any): void {
    console.log('ERROR:', error.message || error);
    Promise.resolve(error);
  }
}
