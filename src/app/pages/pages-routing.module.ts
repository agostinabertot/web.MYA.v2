import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SuccessComponent } from './success/success.component';
import { ServCMIComponent } from './serv-cmi/serv-cmi.component';
import { ServMDComponent } from './serv-md/serv-md.component';
import { PlanEmprendedorComponent } from './plan-emprendedor/plan-emprendedor.component';
import { PlanEmpresaComponent } from './plan-empresa/plan-empresa.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'success', component: SuccessComponent},
  { path: 'comunicacion', component: ServCMIComponent},
  { path: 'markdigital', component: ServMDComponent},
  { path: 'emprendedor', component: PlanEmprendedorComponent},
  { path: 'empresa', component: PlanEmpresaComponent},
  { path: 'success', component: SuccessComponent},
  { path: '', component: InicioComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }