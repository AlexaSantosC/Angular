import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/modelo/Empleado';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
    this.Editar();
  }
  modelEmpleado: Empleado = new Empleado();

  //Recuperar datos
  Editar() {
    let id = localStorage.getItem("id");
    this.service.getEmpleadoId(+id).subscribe(data => {
      this.modelEmpleado = data;
    })
  }

  //Obtengo los datos para editar 
  Actualizar(empleado: Empleado) {
    this.service.updateEmpleado(empleado).subscribe(data => {
      this.modelEmpleado = data;
      alert("Se acutualizo el registro con exito");
      this.router.navigate(["listar"]);

    })
  }
}
