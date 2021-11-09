import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Location } from '@angular/common';
import { LoginService } from 'src/app/service/login.service';
import { ShopService } from 'src/app/service/shop.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  user:String | null = ""
  logout=true
  producto:Array<any>=[]

  constructor(
    private router: Router,
    private Location: Location,
    private login: LoginService,
    private lista: ShopService,
  ) { }

  logOut(){
    this.logout= true
    this.router.navigateByUrl("")
  }
   
  ngOnInit(): void {
    this.login.disparador.subscribe(data => {
      console.log(data);
      this.user = data
      this.logout = false
      
    })
  }
  refresh(){
    const url = location.href.toString()
    console.log(url)
    console.log(typeof(url))
    url === "http://localhost:4200/" ? this.router.navigateByUrl("/refresh",{skipLocationChange: true}).then(()=>{
      this.router.navigate([decodeURI(this.Location.path())])
    }) : this.router.navigateByUrl("")
    
    
  }
}
