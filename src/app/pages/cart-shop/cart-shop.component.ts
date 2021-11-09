import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from 'src/app/service/shop.service';

@Component({
  selector: 'app-cart-shop',
  templateUrl: './cart-shop.component.html',
  styleUrls: ['./cart-shop.component.sass']
})
export class CartShopComponent implements OnInit {

  parapam: Array<any> = []

  constructor(
    private lista: ShopService,

  ) { 
    
    this.lista.carrito.subscribe(data => {
      this.parapam = data
    })
  }
  

  ngOnInit(): void { }
  

}
