import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private _name: string = 'Dwayne John';

  protected get name(): string {
    return this._name;
  }

  name2(): string {
    return this._name;
  }
}
