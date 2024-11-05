import { Component } from '@angular/core';
import { CitasService } from '../servicios/citas.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-manage-quotes',
  templateUrl: './manage-quotes.page.html',
  styleUrls: ['./manage-quotes.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class ManageQuotesPage {
  citas = this.citasService.getCitas();
  nuevaCita = { frase: '', autor: '' };

  constructor(private citasService: CitasService) {}

  agregarCita() {
    this.citasService.agregarCita(this.nuevaCita);
    this.nuevaCita = { frase: '', autor: '' };
    this.citas = this.citasService.getCitas(); 
  }

  eliminarCita(index: number) {
    this.citasService.eliminarCita(index);
    this.citas = this.citasService.getCitas(); 
  }
}

