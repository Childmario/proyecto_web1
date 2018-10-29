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
  edit_task: Task;
  update_task: Task = {nombre:"",correo:"",nacion:"",mensaje:"",movil:""};
  hide: boolean = true;
  hide_comentario: boolean = false;

  constructor(private dataService: DataService){}

  ngOnInit() {
    //this.tasks = this.dataService.getTask();
    this.dataService.getTask()
      .subscribe(tasks => {
        this.tasks = tasks;
      })
      //console.log(this.tasks);
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
    //this.id = this.edit_task.id;
    //console.log("Ver esto" + this.id);
  }

 editTask(){
    this.hide = true;
    this.hide_comentario = false;
    console.log("guardando");
    console.log("nombre" + this.name2);
    console.log("email" + this.email2);
    console.log("movil" + this.movil2);
    console.log("nacion" + this.nacion2);
    console.log("mensaje" + this.message2);
    this.update_task._id = this.edit_task._id;
    this.update_task.nombre = this.name2;
    this.update_task.correo = this.email2;
    this.update_task.movil = this.movil2;
    this.update_task.nacion = this.nacion2;
    this.update_task.mensaje = this.message2;
    //this.update_task.id = this.id;
    console.log("Antes de mandar id: " + JSON.stringify(this.update_task));
    this.dataService.updateTask(this.update_task)
    .subscribe(res => {
    });
    //this.tasks = this.dataService.getTask();
  }






}

