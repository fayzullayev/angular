import { Component } from '@angular/core';
import { FooterModule } from '../../module/footer/footer.module';
import { NgIf } from '@angular/common';
// import { BoxItemComponent } from '../../module/box-item/box-item.component';
// import { BoxComponent } from '../../module/box/box.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterModule, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isShowTemplate: boolean = true;

  toggle() {
    this.isShowTemplate = !this.isShowTemplate;
  }
}
