import {
  AfterContentInit,
  Component,
  ContentChildren,
  OnInit,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css'],
})
export class TabsContainerComponent implements OnInit, AfterContentInit {
  @ContentChildren(TabComponent) tabs = {};

  ngOnInit() {}

  ngAfterContentInit() {
    console.log(this.tabs);
  }
}
