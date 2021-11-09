import { Component, OnInit, ɵɵNgOnChangesFeature, OnChanges, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { ShopService } from 'src/app/service/shop.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  
  logueado = false
  productos = true
  products:any=[]
  loading=true
  listaCarrito: Array<any>= []

  constructor(
    private productService:ProductService,
    private lista: ShopService, 
    private route: Router
  ) {
  
  }
    
  
  async ngOnInit(): Promise<void> {
    try{
      this.products = await this.productService.getAll()
    }
    catch(error){
      console.log(error);
    }
  
  }
  addCart(product: any){
    this.listaCarrito.push(product)
    this.lista.carrito.emit(this.listaCarrito)
    console.log(this.listaCarrito);    
  }

  carrito(){
    this.productos = this.productos ? false : true
    this.route.navigateByUrl("")
  }

  
}
