import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  AfterContentChecked,
  AfterViewInit,
  AfterContentInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterViewInit,
    AfterContentInit,
    AfterViewChecked,
    AfterContentChecked,
    OnDestroy
{
  @Input('img') postImg: string = '';

  @Output('onImgSelected')
  imgSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    console.log('constructor() called', this.postImg);
  }

  ngOnInit() {
    console.log('ngOnInit() called', this.postImg);
  }

  ngDoCheck() {
    console.log('ngDoCheck() called', this.postImg);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges() called', this.postImg);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit() called');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit() called');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked() called');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked() called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy() called');
  }
}
