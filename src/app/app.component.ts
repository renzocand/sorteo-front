import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  constructor(private service:AppService){
    
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.service.getConfiguracion().subscribe(data=>{

      if(data['ok']){
        const configActual = data['configuraciones'][0]
        this.service.configuracion.nombreUsuario = configActual['usuario'];
        this.service.configuracion.precioRifa = configActual['precioRifa'];
        this.service.configuracion.password = configActual['password'];

        this.service.isConfiguracion.next(1)
      }
   
    })
  }

}
