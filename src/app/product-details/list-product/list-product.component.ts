import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  allProducts :any
  product :any ;
  data: any;
  options: any;
  mobileCount = 0;
  laptopCount = 0;
  smartWatchCount = 0 ;
  IschartLoad = false
  DataCount:number[]=[];

  constructor (private _userService : UserService , private router : Router){  }



  ngOnInit(): void {
    
           const documentStyle = getComputedStyle(document.documentElement);
           const textColor = documentStyle.getPropertyValue('--text-color');
           const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
           const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

       
        
        this.options = {
          maintainAspectRatio: false,
          aspectRatio: 0.8,
          plugins: {
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          }
        }
        this.getAllProduct() 
        this.showChart()

  }

  showChart(){
    this.data = {
      labels: [ 'Mobile', 'laptop','SmartWatch'],
      datasets: [
          {
              label: 'My First dataset',
              backgroundColor:'blue',
              borderColor:'blue',
              data:this.DataCount
          },
         
      ]
  };

  }


  getAllProduct(){
    this._userService.getAllproduct().subscribe((res)=>{
     this.allProducts =  res;
    

     this.allProducts.forEach((item:any) => {
      if(item.category == 'Mobile'){
         this.mobileCount++;
        
      }
      if(item.category== 'Laptop'){
        this.laptopCount++;
       
      
       
      }
      if(item.category == 'SmartWatch'){
     this.smartWatchCount++
     
    
    
      } 

      this.IschartLoad  = true    
    });
    
     this.DataCount.push(this.mobileCount)
     this.DataCount.push(this.laptopCount)
     this.DataCount.push(this.smartWatchCount)
   
   })
  }



  getProductByid(id:any){
        this.router.navigate([`./product/add-product/${id}`])
        
      
  }


deleteProductById(id:any){
     this._userService.DeleteByid(id).subscribe((res)=>{
      console.log(res);
      alert('product deleted successfully')

      
       this.showChart();
       this.getAllProduct();
    
    
      })
     
}
}
