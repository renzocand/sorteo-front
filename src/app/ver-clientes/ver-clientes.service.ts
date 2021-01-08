import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { ClientesDto } from './ver-clientes.model';

@Injectable({
    providedIn: 'root'
})
export class VerClientesService {
    url = environment.url;

    constructor(private http:HttpClient){}

    getClientes(){
        const url = this.url + '/cliente'
        return this.http.get(url).pipe(
            map<any,ClientesDto[]>(item=>item['usuarios'])
        )
    }

    editarCliente(_id:string, pagado:any){
        const url = this.url + '/cliente/' + _id
        return this.http.put(url, {pagado})
    }

    eliminarCliente(_id:string){
        const url = this.url + '/cliente/' + _id
        return this.http.delete(url)
    }
}