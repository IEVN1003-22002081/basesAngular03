import { Component } from '@angular/core';

@Component({
  selector: 'app-resistencias',
  standalone: false,
  templateUrl: './resistencias.component.html',
  styleUrl: './resistencias.component.css'
})
export class ResistenciasComponent {
 coloresBandas = [
    { nombre: 'Negro', valor: 0, hex: '#000000' },
    { nombre: 'Cafe', valor: 1, hex: '#953a3aff' },
    { nombre: 'Rojo', valor: 2, hex: '#FF0000' },
    { nombre: 'Naranja', valor: 3, hex: '#FFA500' },
    { nombre: 'Amarillo', valor: 4, hex: '#FFFF00' },
    { nombre: 'Verde', valor: 5, hex: '#008000' },
    { nombre: 'Azul', valor: 6, hex: '#0000FF' },
    { nombre: 'Violeta', valor: 7, hex: '#8A2BE2' },
    { nombre: 'Gris', valor: 8, hex: '#808080' },
    { nombre: 'Blanco', valor: 9, hex: '#FFFFFF' }
  ];

  coloresMultiplicador = [
    { nombre: 'Negro', valor: 1, hex: '#000000' },
    { nombre: 'Cafe', valor: 10, hex: '#A52A2A' },
    { nombre: 'Rojo', valor: 100, hex: '#FF0000' },
    { nombre: 'Naranja', valor: 1000, hex: '#FFA500' },
    { nombre: 'Amarillo', valor: 10000, hex: '#FFFF00' },
    { nombre: 'Verde', valor: 100000, hex: '#008000' },
    { nombre: 'Azul', valor: 1000000, hex: '#0000FF' },
    { nombre: 'Violeta', valor: 10000000, hex: '#8A2BE2' },
    { nombre: 'Gris', valor: 100000000, hex: '#808080' },
    { nombre: 'Blanco', valor: 1000000000, hex: '#FFFFFF' }
  ];

  coloresTolerancia = [
    { nombre: 'Dorado', valor: 5, hex: '#FFD700' },
    { nombre: 'Plata', valor: 10, hex: '#C0C0C0' }
  ];

  banda1Seleccionada: any;
  banda2Seleccionada: any;
  multiplicadorSeleccionado: any;
  toleranciaSeleccionada: any;

  valorResistencia = 0;
  valorMaximo = 0;
  valorMinimo = 0;

  calcular(): void {
    if (this.banda1Seleccionada && this.banda2Seleccionada && 
        this.multiplicadorSeleccionado && this.toleranciaSeleccionada) {
      const valorBase = parseInt(
        `${this.banda1Seleccionada.valor}${this.banda2Seleccionada.valor}`, 
        10
      );
      this.valorResistencia = valorBase * this.multiplicadorSeleccionado.valor;

      const tolerancia = this.valorResistencia * (this.toleranciaSeleccionada.valor / 100);
      this.valorMaximo = this.valorResistencia + tolerancia;
      this.valorMinimo = this.valorResistencia - tolerancia;
    }
  }


}
