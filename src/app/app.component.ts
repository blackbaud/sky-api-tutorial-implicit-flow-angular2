/**
 *  Imports the component's dependencies and constructors.
 */
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SettingsService } from '../shared/settings.service';

/**
 *  Uses the Component decorator to create  metadata for the new Angular 2 component.
 */
@Component({
  selector: 'my-app',
  template: require('./app.component.html')
})

/**
 *  Creates and exports the class constructor for this component. The custom methods and properties of this
 *  component are defined and used here. When a class is created, it can extend other classes to gain
 *  access to their methods and properties, or it can implement an interface to instruct the app to define
 *  specific methods or properties. This example implements the OnInit interface, which tells the class
 *  to define an ngOnInit method.
 */
export class AppComponent implements OnInit {
  public isReady: Boolean = false;

  /**
   * The constructor method creates instances of titleService and settingsService that are local to this component.
   */
  constructor(
    private titleService: Title,
    private settingsService: SettingsService) { }

  /**
   * Defines the ngOnInit method for the AppComponent. This method runs when the component initializes.
   */
  public ngOnInit(): void {
    this.setTitle('SKY API Implicit Flow Tutorial - Angular 2');

    /**
     *  When the browser nagivates to the home route, the component calls the settingsService to fetch the settings 
     *  config file and store the settings before it loads content. This ensures that it has all the 
     *  config variables it needs when it makes requests or performs authorization checks before rendering the views.
     */
    this.settingsService.getConfigFile().then(() => {
      this.isReady = true;
    });
  }

  /**
   *  Sets the value of the title tag in the index.html file to the value passed in during the ngOnInit method call.
   */
  public setTitle(title: string): void {
    this.titleService.setTitle(title);
  }
}
