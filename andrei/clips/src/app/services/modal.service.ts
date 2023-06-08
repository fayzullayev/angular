import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: IModal[] = [];

  constructor() {}
  isModalVisible(id: string): boolean {
    // return this.modals.find((item: IModal) => item.id === id)?.visible ?? false;
    return !!this.modals.find((item: IModal) => item.id === id)?.visible;
  }

  toggleModal(id: string): void {
    const modal = this.modals.find((item: IModal) => item.id === id);
    if (modal) {
      modal.visible = !modal.visible;
    }
  }

  unregister(id: string) {
    this.modals = this.modals.filter((item: IModal) => item.id !== id);
  }

  register(id: string) {
    this.modals.push({
      id,
      visible: false,
    });

    // console.log(this.modals);
  }
}
