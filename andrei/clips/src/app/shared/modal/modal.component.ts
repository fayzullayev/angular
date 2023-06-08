import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() modalID: string = '';

  constructor(public modal: ModalService, public el: ElementRef) {}

  closeModal() {
    this.modal.toggleModal(this.modalID);
  }

  ngOnInit() {
    document.body.appendChild(this.el.nativeElement);
  }
}
