import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/Modelo/Empleado';

import {ServiceService} from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  empleados:Empleado[];


  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getEmpleados().subscribe(data=>{this.empleados=data;})
   
  }

  Editar(empleado:Empleado):void{
    localStorage.setItem("id", empleado.id.toString());
    this.router.navigate(["edit"]);
  }

  Eliminar(empleado: Empleado){
    this.service.deleteEmpleado(empleado).subscribe(data=>{
      alert("Elimino correctamente el registro");
      this.empleados = this.empleados.filter(p => p !== empleado); //Esto nos ayuda que si es nulo, no elimina nada
    })
  }

}
