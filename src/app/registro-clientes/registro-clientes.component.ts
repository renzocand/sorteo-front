import { Component, OnInit } from '@angular/core';
import { Cliente, RegistroClientesRq } from './registro-clientes.models';
import Swal from 'sweetalert2'
import { RegistroClientesService } from './registro-clientes.service';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-registro-clientes',
  templateUrl: './registro-clientes.component.html',
  styleUrls: ['./registro-clientes.component.scss']
})
export class RegistroClientesComponent implements OnInit {

  cliente = new Cliente();
  loading = false;

  departamento:any = [];

  provincias:any;
  provincia:any = [];

  distritos:any;
  distrito:any = [];


  constructor(private service:RegistroClientesService, private router:Router, public appService:AppService) { }

  ngOnInit(): void {
    this.service.getDepartamentos().subscribe(data=>{
      this.departamento = data;
    })
    this.service.getProvincias().subscribe(data=>{
      this.provincias = data
    })
    this.service.getDistritos().subscribe(data=>{
      this.distritos = data;
    })
  }


  departamentoChange(departamento){
    // 3927
    if(!departamento){
      this.provincia = [];
      this.distrito = [];
      return ;
    }
    const ubigeoDep = departamento['id_ubigeo']
    this.provincia = this.provincias[ubigeoDep];
  }

  provinciaChange(provincia){
    if(!provincia){
      this.distrito = [];
      return ;
    }
    const ubigeoDep = provincia['id_ubigeo']
    this.distrito = this.distritos[ubigeoDep];
  }

  save(){
    if(!this.cliente.nombre || !this.cliente.dni){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El nombre y el celular son obligatorios',
      })
      return ;
    }

    this.loading = true;

    const body = new RegistroClientesRq(
      this.cliente.nombre,
      Number(this.cliente.dni),
      this.cliente.cntRifas,
      this.cliente.departamento?this.cliente.departamento['nombre_ubigeo']:'',
      this.cliente.provincia?this.cliente.provincia['nombre_ubigeo']:'',
      this.cliente.distrito?this.cliente.distrito['nombre_ubigeo']:''
    )

    this.service.saveCliente(body).subscribe(resp=>{
      this.loading = false;
      if(resp['ok']){
        Swal.fire({
          icon: 'success',
          title: 'Felicitaciones',
          text: 'Sus rifas han sido generadas con los numeros: ' + resp['rifasGuardadas'],
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigateByUrl('/ver')
          }
        })
      }
    })
  }

}
