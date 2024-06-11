import { Injectable } from '@angular/core';
 import{ HttpClient} from '@angular/common/http'
import { Subject, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

      loginData = new Subject ;
      addProd = new Subject ;
     
    baseUrl = 'http://localhost:3000/products/'
  constructor( private http : HttpClient) { }

    getAllproduct(){
      return this.http.get(this.baseUrl)
    }

    AddProduct(data:any){
      return this.http.post(this.baseUrl,data)
    }
    getProductByid(id :any){
      return this.http.get(`${this.baseUrl}${id}`)
    }
    DeleteByid(id :any){
      return this.http.delete(`${this.baseUrl}${id}`)
    }
    updateProductById(data:any , id :any ){
      return this.http.patch(`${this.baseUrl}${id}`, data)
    }

    // getUsers(){
    //  return  this.http.get(this.baseUrl)
      
    // }
    //  listOfPost( id:any){
    //     return this.http.get(`https://gorest.co.in/public-api/users/${id}`)
    //  }
    //  listOfComments(postid:any){
    //    return this.http.get(`https://gorest.co.in/public-api/posts/${postid}`)
    //  }
}
