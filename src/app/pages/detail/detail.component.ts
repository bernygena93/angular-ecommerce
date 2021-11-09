import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {

  products:any

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) { }

  async ngOnInit(): Promise<void> {
    
    try{
    const id = this.activatedRoute.snapshot.paramMap.get("id")
    console.log(typeof(id))
    this.products = await this.productService.getById(id)
    this.products = this.products[0]
  }catch(error){
    console.log(error);
    
  }
  }

}
