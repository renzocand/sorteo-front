import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroClientesComponent } from './registro-clientes/registro-clientes.component';
import { VerClientesComponent } from './ver-clientes/ver-clientes.component';

const routes: Routes = [
    { path: '', component: RegistroClientesComponent },
    { path: 'ver', component: VerClientesComponent },
    { path: 'ver/:codigo', component: VerClientesComponent },
    { path: '**', component: RegistroClientesComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
