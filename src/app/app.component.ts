/**
 *  Import the components' dependencies and constructors.
 */
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SettingsService } from '../shared/settings.service';

/**
 *  Uses the Component decorator to create the metadata for the new Angular 2 component.
 */
@Component({
  selector: 'my-app',
  template: require('./app.component.html')
})

/**
 *  Creates and exports the class constructor for this component. The custom methods and properties of this
 *  component are defined and used here.  When the class is created, it can extend other classes, gaining
 *  access to their methods and properties, or it can implement an interface, instructing the app to define
 *  specific methods or properties. In this case, it implements the OnInit interface, telling the class it
 *  needs to define an ngOnInit method.
 */
export class AppComponent implements OnInit {
  public isReady: Boolean = false;

  /**
   * The constructor method creates instances of the TitleService and SettingsService local to this component.
   */
  constructor(
    private titleService: Title,
    private settingsService: SettingsService) { }

  /**
   * Defines the ngOnInit method for the AppComponent.   This method runs when the component is initialized.
   */
  public ngOnInit(): void {
    this.setTitle('SKY API Implicit Flow Tutorial - Angular 2');

    /**
     *  When the browser nagivates to the home route, the component calls the settingsService to fetch the settings 
     *  config file and store the settings before it tries to load any content. This ensures it has all the 
     *  config variables it needs when making requests or performing authorization checks before rendering the views.   
     */
    this.settingsService.getConfigFile().then(() => {
      this.isReady = true;
    });
  }

  /**
   *  Sets the value of the <title> </title> tags in the index.html file to the value passed in during the ngOnInit method call.
   */
  public setTitle(title: string): void {
    this.titleService.setTitle(title);
  }
}
