import { Injectable } from '@angular/core';

interface Cita {
  frase: string;
  autor: string;
}

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  private citas: Cita[] = [
    { frase: 'Estar solo no tiene nada que ver con cuantas personas hay alrededor', autor: 'Richard Yates' },
    { frase: 'No se puede encontrar la paz evitando la vida', autor: 'Virginia Woolf' },
    { frase: 'El sentido común no es resultado de la educación', autor: 'Victor Hugo'},
    { frase: 'Escoge una persona que te mire como si fueses magia', autor: 'Frida Kahlo'}
  ];

  constructor() {}

  getCitaAleatoria(): Cita {
    const index = Math.floor(Math.random() * this.citas.length);
    return this.citas[index];
  }

  agregarCita(cita: Cita) {
    this.citas.push(cita);
  }

  eliminarCita(index: number) {
    if (index >= 0 && index < this.citas.length) {
      this.citas.splice(index, 1);
    }
  }

  getCitas(): Cita[] {
    return this.citas;
  }
}
