import { Component } from '@angular/core';
import { SearchbarComponent } from './searchbar/searchbar.component';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [SearchbarComponent]
})
export class AppComponent {
  title = 'app works!';
}
