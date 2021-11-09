import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormComponent } from '../components/form/form.component';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http:HttpClient
  ) { 

  }    

  getAll(){
    return this.http.get("https://jsonfy.com/items").toPromise()
  }

  getById(id: any){
    return this.http.get("https://jsonfy.com/items/"+id).toPromise()
  }
}
