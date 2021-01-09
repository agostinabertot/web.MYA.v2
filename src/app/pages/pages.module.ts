import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SuccessComponent } from './success/success.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ServMDComponent } from './serv-md/serv-md.component';
import { ServCMIComponent } from './serv-cmi/serv-cmi.component';
import { PlanEmpresaComponent } from './plan-empresa/plan-empresa.component';
import { PlanEmprendedorComponent } from './plan-emprendedor/plan-emprendedor.component';



@NgModule({
  declarations: [InicioComponent, ContactoComponent, SuccessComponent, ServMDComponent, ServCMIComponent, PlanEmpresaComponent, PlanEmprendedorComponent],
  exports: [InicioComponent, ContactoComponent, SuccessComponent, ServMDComponent, ServCMIComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
  ]
})
export class PagesModule { }
