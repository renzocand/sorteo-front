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

    getDepartamentos(){
        const url = "https://raw.githubusercontent.com/joseluisq/ubigeos-peru/master/json/departamentos.json"
        return this.http.get(url)
    }
    getProvincias(){
        const url = "https://raw.githubusercontent.com/joseluisq/ubigeos-peru/master/json/provincias.json"
        return this.http.get(url)
    }
    getDistritos(){
        const url = "https://raw.githubusercontent.com/joseluisq/ubigeos-peru/master/json/distritos.json"
        return this.http.get(url)
    }
}