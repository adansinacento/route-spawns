import { EventEmitter } from '@angular/core';

export class ModalComunicatorService {
  openModalEmitter = new EventEmitter();

  commandModalOpen() {
    this.openModalEmitter.emit();
  }
}
