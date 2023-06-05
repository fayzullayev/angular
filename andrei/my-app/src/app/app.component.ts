import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  imageUrl: string =
    'https://images.unsplash.com/photo-1526900913101-88c16676ca02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=848&q=80';

  logImg(event: string) {
    console.log(event);
  }

  name: string = 'mirodil fayzullayev';

  currentDate: Date = new Date();

  temp: number = 25.3;

  pizza = {
    pizzas: ['peperonni', 'bacon'],
    size: 'large',
  };

  blueClass: boolean = false;

  fontSize: number = 16;

  public images: string[] = [
    'https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0',
    'https://fastly.picsum.photos/id/19/2500/1667.jpg?hmac=7epGozH4QjToGaBf_xb2HbFTXoV5o8n_cYzB7I4lt6g',
    'https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I',
  ];
}
