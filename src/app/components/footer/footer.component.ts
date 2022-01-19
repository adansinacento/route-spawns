import { Component, OnInit } from '@angular/core';
import { ModalComunicatorService } from '../../services/modal-comunicator.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(private modalCommunicator: ModalComunicatorService) {}

  ngOnInit(): void {}

  onOpenModal() {
    this.modalCommunicator.commandModalOpen();
  }
}
