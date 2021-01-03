import { Component, OnInit } from '@angular/core';
import { ClientesDto } from './ver-clientes.model';
import { VerClientesService } from './ver-clientes.service';

import * as dayjs from 'dayjs'
import { ActivatedRoute } from '@angular/router';
import { Message } from 'primeng/api/message';
dayjs().format()


@Component({
  selector: 'app-ver-clientes',
  templateUrl: './ver-clientes.component.html',
  styleUrls: ['./ver-clientes.component.scss']
})
export class VerClientesComponent implements OnInit {

  clientes:ClientesDto[] = [];
  loading = true;

  isAdmin = false;
  displayBasic = false;

  clienteEscogido:ClientesDto;

  stateOptions: any[];

  visibleSidebar3 = false;

  clienteGanador:ClientesDto[] = [];

  loadingSorteo = true;
  msgs1: Message[];


  constructor(private service:VerClientesService, private ar:ActivatedRoute) { }

  ngOnInit(): void {

    this.ar.params.subscribe(param=>{
      if(param['codigo'] == 76586942){
        this.isAdmin = true;
      }
    })

    this.service.getClientes().subscribe(data=>{
      this.clientes = data.map(item=> ({...item,fechaCreada: dayjs(item.fechaCreada).format('DD/MM/YYYY - hh:mm a') }))
      this.loading = false;
    })


    this.stateOptions = [{label: 'Pagada', value: true}, {label: 'Faltante', value: false}];

  }

  sortear(){
    this.loadingSorteo = true;
    this.visibleSidebar3 = true;

    const clientesValidos = this.clientes.filter(item=>item.pagado);

    this.clienteGanador = [ clientesValidos[Math.floor(Math.random() * clientesValidos.length)] ];

    const mensajeGanador = `${this.clienteGanador[0].nombre} con nro de rifa ${this.clienteGanador[0].nroRifa}`

    this.msgs1 = [
      {severity:'success', summary:'Ganador', detail:mensajeGanador},
  ];

    setTimeout(() => {
      this.loadingSorteo = false;
    }, 1500);
  }

  abrirModal(cliente:ClientesDto){
    this.displayBasic = true;
    this.clienteEscogido = JSON.parse(JSON.stringify(cliente))
  }

  editarCliente(cliente:ClientesDto){
    this.displayBasic=false;

    this.service.editarCliente(cliente._id,cliente.pagado).subscribe(data=>{
      if(data['ok']){
        this.clientes = this.clientes.map(item=>{
          if(item._id == data['cliente']._id ){
            item.pagado = data['cliente']['pagado']
          }
          return item
        })
      }
    })
  }
}
