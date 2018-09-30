import { Component } from '@angular/core';

import { Task } from "./Models/task";
import { DataService } from "./servicios/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mgp1';
  users = ['Mario', 'Roberto', 'Grajeda','Alvarado'];
  tasks: Task[];
  name2: string;
  email2: string;
  message2: string;
  movil2: string;
  nacion2: string;
  id: string;
  edit_task: Task;
  update_task: Task = {nombre:"",correo:"",nacion:"",mensaje:"",movil:"",id:""};
  hide: boolean = true;
  hide_comentario: boolean = false;

  constructor(public dataService: DataService){}

  ngOnInit() {
    this.tasks = this.dataService.getTask();
  }

  input_edit($event){
    this.hide = false;
    this.hide_comentario = true;
    this.edit_task = $event;
    console.log("dentro del padre");
    console.log(this.edit_task);
    this.name2 = this.edit_task.nombre;
    this.email2 = this.edit_task.correo;
    this.message2 = this.edit_task.mensaje;
    this.nacion2 = this.edit_task.nacion;
    this.movil2 = this.edit_task.movil;
    this.id = this.edit_task.id;
    console.log("Ver esto" + this.id);
  }

 editTask(){
    this.hide = true;
    this.hide_comentario = false;
    console.log("guardando");
    this.update_task.nombre = this.name2;
    this.update_task.correo = this.email2;
    this.update_task.movil = this.movil2;
    this.update_task.nacion = this.nacion2;
    this.update_task.mensaje = this.message2;
    this.update_task.id = this.id;
    console.log("Antes de mandar id: " + this.update_task.id)
    this.dataService.updateTask(this.update_task);
    this.tasks = this.dataService.getTask();
  }






}

