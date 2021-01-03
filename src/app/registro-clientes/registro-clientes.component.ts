import { Component, OnInit } from '@angular/core';
import { Cliente, RegistroClientesRq } from './registro-clientes.models';
import Swal from 'sweetalert2'
import { RegistroClientesService } from './registro-clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-clientes',
  templateUrl: './registro-clientes.component.html',
  styleUrls: ['./registro-clientes.component.scss']
})
export class RegistroClientesComponent implements OnInit {

  cliente = new Cliente()

  constructor(private service:RegistroClientesService, private router:Router) { }

  ngOnInit(): void {
  }


  save(){
    if(!this.cliente.nombre || !this.cliente.dni){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El nombre y el DNI son obligatorios',
      })
      return ;
    }
    if( this.cliente.dni.length < 7){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El DNI debe tener 7 números como mínimo',
      })
      return ;
    }
    const body = new RegistroClientesRq(
      this.cliente.nombre,
      Number(this.cliente.dni),
      this.cliente.cntRifas,
      this.cliente.ciudad
    )

    this.service.saveCliente(body).subscribe(resp=>{
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
