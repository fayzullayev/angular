import { Component } from '@angular/core';
import { FooterModule } from '../../module/footer/footer.module';
import { NgForOf, NgIf } from '@angular/common';
import { BoxComponent } from '../../shared/components/box/box.component';
import { BoxItemComponent } from '../../shared/components/box-item/box-item.component';
// import { BoxItemComponent } from '../../module/box-item/box-item.component';
// import { BoxComponent } from '../../module/box/box.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, NgForOf, BoxComponent, BoxItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isShowTemplate: boolean = true;

  toggle() {
    this.isShowTemplate = !this.isShowTemplate;
  }
}
