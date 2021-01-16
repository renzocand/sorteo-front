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
import { NgSelectModule } from '@ng-select/ng-select';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SelectButtonModule} from 'primeng/selectbutton';
import {SidebarModule} from 'primeng/sidebar';
import {MessageModule} from 'primeng/message';
import {BadgeModule} from 'primeng/badge';


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
    TableModule,
    NgSelectModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    SelectButtonModule,
    SidebarModule,
    MessageModule,
    BadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
