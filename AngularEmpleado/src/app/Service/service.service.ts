import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import{Empleado} from 'src/app/Modelo/Empleado';

@Injectable({
  providedIn: 'root'


})
export class ServiceService {
  constructor(private http:HttpClient) { }
 

  Url= "http://localhost:7575/empleado/";

  getEmpleados(){
    return this.http.get<Empleado[]>(this.Url+"listar");
  }

  createEmpleado(empleado:Empleado){
    return this.http.post<Empleado>(this.Url,empleado);

  }

getEmpleadoId(id:number){
  return this.http.get<Empleado>(this.Url + "/"+ id);
}
updateEmpleado(empleado:Empleado){
  return this.http.put<Empleado>(this.Url + "/"+ empleado.id, empleado);
}

deleteEmpleado(empleado:Empleado){
  return this.http.delete<Empleado>(this.Url + "/" + empleado.id);
}
}