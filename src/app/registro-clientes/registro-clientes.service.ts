import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { RegistroClientesRq } from './registro-clientes.models';

@Injectable({
    providedIn: 'root'
})
export class RegistroClientesService {
    url = environment.url;

    constructor(private http:HttpClient){}

    saveCliente(body:RegistroClientesRq){
        const url = this.url + '/cliente'
        return this.http.post(url,body)
    }
}