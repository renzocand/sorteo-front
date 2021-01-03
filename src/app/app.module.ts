import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { RegistroClientesComponent } from './registro-clientes/registro-clientes.component';
import { VerClientesComponent } from './ver-clientes/ver-clientes.component';
import { AppRoutingModule } from './app.routes';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    RegistroClientesComponent,
    VerClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
    FormsModule,
    HttpClientModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
