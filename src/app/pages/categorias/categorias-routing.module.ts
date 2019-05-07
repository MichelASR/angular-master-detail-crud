import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCategoriasComponent } from './lista-categorias/lista-categorias.component';
import { FormCategoriasComponent } from './form-categorias/form-categorias.component';

const routes: Routes = [
  { path: '', component: ListaCategoriasComponent },
  { path: 'new', component: FormCategoriasComponent },
  { path: ':id/edit', component: FormCategoriasComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
