import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { SearchProductComponent } from './search-product/search-product.component';

const routes: Routes = [
  { path: '', component: ListProductsComponent},
  { path: 'search', component: SearchProductComponent},
  { path: 'delete/:name', component: DeleteProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
