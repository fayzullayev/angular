import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

// import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrl: './box.component.css',
  standalone: true,
  imports: [NgStyle],
})
export class BoxComponent {
  @Input({
    required: true,
    alias: 'color',
  })
  backgroundColor!: 'red' | 'green' | 'blue';
}
