import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.component.html',
  styleUrl: './operas-bas.component.css'
})
export class OperasBasComponent {
  num1: string = '';
  num2: string = '';
  resultado: number = 0;
  calculo: string = '';

  calcular(): void {
    if (this.calculo === 'sumar') {
      this.resultado = parseInt(this.num1) + parseInt(this.num2);
    } else if (this.calculo === 'restar') {
      this.resultado = parseInt(this.num1) - parseInt(this.num2);
    } else if (this.calculo === 'multiplicar') {
      this.resultado = parseInt(this.num1) * parseInt(this.num2);
    } else if (this.calculo === 'dividir') {
      this.resultado = parseInt(this.num2) !== 0
        ? parseInt(this.num1) / parseInt(this.num2)
        : NaN;
        
    }
  }
}
