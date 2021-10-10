import { NovaTransferenciaComponent } from './nova-transferencia.component/nova-transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { Routes } from '@angular/router';

export const routes: Routes = [
  //redirecionar para outra rota quando vazio
  {path: '', redirectTo: 'extrato', pathMatch: 'full'},
  {path: 'extrato', component: ExtratoComponent},
  {path: 'nova-transferencia', component: NovaTransferenciaComponent}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
