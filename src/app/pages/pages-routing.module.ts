import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from 'src/app/pages/category/category.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { NotFoundComponent } from 'src/app/pages/not-found/not-found.component';
import { ProductComponent } from 'src/app/pages/product/product.component';
import { PagesComponent } from 'src/app/pages/pages.component';


const routes: Routes = [
  // rutas protegidas
  {
    path: 'dashboard', component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'product', component: ProductComponent },
      { path: 'category', component: CategoryComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      // { path: '**', component: NotFoundComponent },
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
