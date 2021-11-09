import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  @Output() carrito: EventEmitter <any> = new EventEmitter()
  @Output() nombre: EventEmitter <any> = new EventEmitter()

  constructor() { }
}
