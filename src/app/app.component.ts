import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './services/user.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'userData';
  isListOn = true;
  isAddproductOn :boolean = false
   constructor(private router : Router , private route: ActivatedRoute , private _userService : UserService){}
   ngOnInit(): void {
      
   this._userService.addProd.subscribe((resp:any)=>{
    this.isAddproductOn =resp;
     this.isListOn= false ;
   })
     
   }

  gotoList(){
    this.router.navigate(['/product/list-product'])
  
  }
  addProduct(){
    this.router.navigate(['/product/add-product'])
    this.isListOn = true ;
    this.isAddproductOn = false;
  }
}
