import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';
import { map, take } from 'rxjs';

export const authGuard: CanActivateFn = ( next ,  state) => 
    {
      let data :any
     const localData =  localStorage.getItem('userLogin')
      const router = inject(Router)
       const userService =  inject (UserService)
       userService.loginData.pipe(take(1), map(resp=>{
        data = resp
      
}))

  

       if(localData !== ''){
        return true
      }
      else{
        router.navigateByUrl('./login')
         return false 
         
      }

};




