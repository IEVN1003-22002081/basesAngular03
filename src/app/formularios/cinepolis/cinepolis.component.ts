import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {
nombre: string = '';
  cantidadCompradores: number = 0;
  cantidadBoletas: number = 0;
  tarjetaCineco: boolean = false;
  valorPagar: string = '';

  private readonly PRECIO_BOLETA = 12.000;

  procesar(): void {
    if (this.cantidadBoletas > this.cantidadCompradores * 7) {
      alert(`No se pueden comprar más de 7 boletos. Límite: ${this.cantidadCompradores * 7} boletos.`);
      this.valorPagar = 'Error';
      return;
    }

    let total = this.cantidadBoletas * this.PRECIO_BOLETA;
    let descuento = 0;

    if (this.cantidadBoletas > 5) {
      descuento = total * 0.15;
    } else if (this.cantidadBoletas >= 3 && this.cantidadBoletas <= 5) {
      descuento = total * 0.10;
    }

    let totalConDescuento = total - descuento;

    if (this.tarjetaCineco) {
      const descuentoAdicional = totalConDescuento * 0.10;
      totalConDescuento -= descuentoAdicional;
    }
    
    this.valorPagar = totalConDescuento.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
  }

  salir(): void {
    this.nombre = '';
    this.cantidadCompradores = 0;
    this.cantidadBoletas = 0;
    this.tarjetaCineco = false;
    this.valorPagar = '';
  }

}
