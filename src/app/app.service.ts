import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    url = environment.url;

    configuracion = {
        nombreUsuario:'',
        precioRifa: 0,
        password: ''
    }

    isConfiguracion = new BehaviorSubject(0)

    constructor(private http:HttpClient){}

    getConfiguracion(){
        const url = this.url + '/config'
        return this.http.get(url)
    }

}