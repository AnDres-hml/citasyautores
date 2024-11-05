import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CitasService } from '../servicios/citas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class HomePage implements OnInit {
  quote: { frase: string; autor: string } | undefined;

  constructor(private citasService: CitasService) {}

  ngOnInit(): void {
    this.quote = this.citasService.getCitaAleatoria();
  }

  refrescarCita() {
    this.quote = this.citasService.getCitaAleatoria();
  }
}
