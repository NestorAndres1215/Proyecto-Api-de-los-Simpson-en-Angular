import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpsonComponent } from './pages/simpson/simpson.component';

const routes: Routes = [
  {
    path:'',
    component:SimpsonComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
