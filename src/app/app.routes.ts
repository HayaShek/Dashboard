import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    loadComponent(){return import('./home/home').then((c)=>c.Home)}

  }


];
