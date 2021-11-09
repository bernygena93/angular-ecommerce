import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  @Input()
  producto:any
  @Input()
  detail:boolean=false

  constructor(

    ) { }

  ngOnInit(): void {
  }
}

