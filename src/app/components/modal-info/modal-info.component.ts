import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComunicatorService } from '../../services/modal-comunicator.service';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.css'],
})
export class ModalInfoComponent implements OnInit {
  @ViewChild('modalInfo') modal: ElementRef;
  constructor(
    private modalService: NgbModal,
    private modalCommunicator: ModalComunicatorService
  ) {}

  ngOnInit(): void {
    this.modalCommunicator.openModalEmitter.subscribe(() => {
      this.abrirModal();
    });
  }

  abrirModal() {
    this.modalService.open(this.modal);
  }
}
