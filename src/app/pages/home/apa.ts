import { ApiInvoiceService } from './../../service/api-invoice.service'; 
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estado-de-envio',
  templateUrl: './estado-de-envio.component.html',
  styleUrls: ['./estado-de-envio.component.css'],
})
export class EstadoDeEnvioComponent implements OnInit {
  public quantityToSend = 0;
  public quantitySent = 0;
  public quantityTotal = 0;
  public averageToSend = 0;
  public averageSent = 0;
  public sendingStatus = '';
  public loader = true;

  constructor(
    private apiInvoiceService: ApiInvoiceService,
    private router: Router
  ) {}

  public average(): void {
    if (this.quantityTotal) {
      this.quantityToSend <= this.quantitySent
        ? (this.averageToSend =
            (this.quantityToSend / this.quantityTotal) * 100)
        : (this.averageSent = (this.quantitySent / this.quantityTotal) * 100);
      this.averageToSend
        ? (this.averageSent = 100 - this.averageToSend)
        : (this.averageToSend = 100 - this.averageSent);
      this.averageSent = parseFloat(this.averageSent.toFixed(2));
      this.averageToSend = parseFloat(this.averageToSend.toFixed(2));
    }
    this.averageSent === 100
      ? (this.sendingStatus = ' FINALIZADO')
      : (this.sendingStatus = ' EN PROGRESO');
    this.loader = false;
  }

  async ngOnInit():Promise<void>{
    

    refresh():{
      this.loader = true;
      this.quantityToSend = 0;
      this.quantityToSend = await this.apiInvoiceService.getInvoiceToSend(1000000).subscribe(
      (response) => {
        response.rows.forEach((quantity) => {
          this.quantityToSend += parseInt(quantity.env_cantidad);
        });
      },
      (error) => {
        if (error.status == 401) {
          this.loader = false;
          this.router.navigate(['error-page']);
        }
      }
    );
    this.quantityTotal = await this.apiInvoiceService.getInvoiceSent().subscribe(
      (response) => {
        this.quantitySent = response.total;
      },
      (error) => {
        if (error.status == 401) {
          this.loader = false;
          this.router.navigate(['error-page']);
        }
      }
    );
    this.quantityTotal = this.quantitySent + this.quantityToSend;
    //Para probar

    // this.quantityTotal = await this.apiInvoiceService.getInvoiceSent().subscribe(
    //     (response) => {
    //       this.quantitySent = response.total;
    //     },
    //     (error) => {
    //       if (error.status == 401) {
    //         this.loader = false;
    //         this.router.navigate(['error-page']);
    //       }
    //     }
    //   );
    //   return this.quantitySent + this.quantityToSend;
  }
}
}