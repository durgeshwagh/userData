import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent  implements OnInit{

  productForm ! :FormGroup
  id:any ;
  product :any
  isEdit =  false ;
  isSubmit = true ;
   constructor(private router : Router , private fb : FormBuilder , private _userService : UserService , private route:ActivatedRoute){}


   ngOnInit(): void {
      this.productForm = this.fb.group({
        name: ['', Validators.required],
        price: [ '', Validators.required],
        category: ['', Validators.required] 
      })


      this.route.params.subscribe((resp)=>{
           this.id =  resp
            if(this.id.id == null){
            this.isEdit = false;
            this.isSubmit =true
            }else{
              this.isSubmit = false
              this.isEdit = true;
            
            }
            this.getProduct()

      })

    } 

   getProduct(){
    this._userService.getProductByid(this.id.id).subscribe((res)=>{
      console.log(res)
       this.product = res ;
      this.productForm.get('name')?.patchValue(this.product.name)
      this.productForm.get('price')?.patchValue(this.product.price)
      this.productForm.get('category')?.patchValue(this.product.category)

    })
   }

  gotoList(){
    this.router.navigate(['/product/list-product'])
  }

  onSubmit(){

    if(this.id.id != null){
      const id =  this.id.id
      this._userService.updateProductById(this.productForm.value,id).subscribe((resp)=>{
         console.log(resp);
       alert('Data updated Successfully')
      })
      this.router.navigate(['/product/list-product'])
       this._userService.addProd.next(true)
    } else{
      console.log(this.productForm.value)
       this._userService.AddProduct(this.productForm.value).subscribe((resp)=>{
         console.log(this.productForm.value);
          alert('Data Successfully Addedd')
         console.log('data addedd successfully')
       }) 
       this.router.navigate(['/product/list-product'])
       this._userService.addProd.next(true)

    }



       
  }
}
