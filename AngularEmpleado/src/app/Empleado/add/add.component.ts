import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/modelo/Empleado';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  empleado: Empleado = new Empleado();
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {

  }
  modelEmpleado = new Empleado();
  Guardar(empleado:Empleado) {
    this.service.createEmpleado(empleado).subscribe(data=>{
      alert("Agrego un registro correctamente");
      this.router.navigate(["listar"]);
    })
  
  }

}

