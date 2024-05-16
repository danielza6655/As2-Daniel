import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { DemographicComponent } from './demographic/demographic.component';
import { LargeTextDirective } from './my-attribute.directive';
import { MyIfDirective } from './my-structural.directive';
import { MyCustomPipe } from './my-pipe.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    LoginComponent,
    DemographicComponent,
    LargeTextDirective,
    MyIfDirective,
    MyCustomPipe
  ]
})
export class AppComponent {
  showText = false;
}
