import { Component, OnInit } from '@angular/core';
import { ClientesDto } from './ver-clientes.model';
import { VerClientesService } from './ver-clientes.service';

import * as dayjs from 'dayjs'
dayjs().format()


@Component({
  selector: 'app-ver-clientes',
  templateUrl: './ver-clientes.component.html',
  styleUrls: ['./ver-clientes.component.scss']
})
export class VerClientesComponent implements OnInit {

  clientes:ClientesDto[] = [];
  loading = true;

  constructor(private service:VerClientesService) { }

  ngOnInit(): void {
    this.service.getClientes().subscribe(data=>{
      this.clientes = data.map(item=> ({...item,fechaCreada: dayjs(item.fechaCreada).format('DD/MM/YYYY - hh:mm a') }))
      this.loading = false;
    })
  }

}
