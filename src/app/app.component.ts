import { Component } from '@angular/core';

@Component({
  selector: 'stn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public date = new Date();
}
