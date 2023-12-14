import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-own',
  standalone: true,
  imports: [],
  templateUrl: './own.component.html',
  styleUrl: './own.component.css',
})
export class OwnComponent implements OnInit {
  @Input({ alias: 'idd' }) iddd!: string;

  ngOnInit() {
    console.log('this.iddd:', this.iddd);
  }
}
