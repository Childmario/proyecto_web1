import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Task } from "../Models/task";
import { DataService } from "../servicios/data.service";

@Component({
  selector: 'app-lista-comentarios',
  templateUrl: './lista-comentarios.component.html',
  styleUrls: ['./lista-comentarios.component.css']
})
export class ListaComentariosComponent implements OnInit {
  tasks: Task[];
  edit_task: Task;
  name: string;
  email: string;
  message: string;
  movil: string;
  nacion: string;
@Input ('task') task: Task;
@Output() item_editado = new EventEmitter<Task>();
  constructor(public dataService: DataService) { 

  }

  ngOnInit() {
   
  }

  removercomentario(task: Task){
    const respuesta = confirm('Desea borrar la tarea');
    if (respuesta) {
      this.dataService.removeTask(task);
    }

  }

  editar(task: Task){

      this.edit_task = this.dataService.editTask(task);
      //console.log(this.edit_task);
      console.log(this.edit_task);
      this.item_editado.emit(this.edit_task);
      console.log(this.item_editado);
  }

}
