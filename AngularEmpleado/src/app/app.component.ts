import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListarComponent } from './Empleado/listar/listar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola mundo - Angular';

  constructor(private router:Router){}
    listar(){
      this.router.navigate(["listar"]);
    
  }

  add(){
    this.router.navigate(["add"]);
  
}

}