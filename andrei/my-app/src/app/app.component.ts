import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private _name: string = 'Dwayne John';

  imageUrl: string =
    'https://images.unsplash.com/photo-1526900913101-88c16676ca02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=848&q=80';

  imageUrl2: string =
    'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=911&q=80';

  get name(): string {
    return this._name;
  }

  name2(): string {
    return this._name;
  }

  // changeImage(): void {
  //   let img: string = this.imageUrl;
  //   this.imageUrl = this.imageUrl2;
  //   this.imageUrl2 = img;
  // }

  changeImage(event: KeyboardEvent) {
    this.imageUrl = (event.target as HTMLInputElement).value;
  }
}
