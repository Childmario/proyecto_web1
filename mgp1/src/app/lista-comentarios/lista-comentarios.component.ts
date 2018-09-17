import { Component, OnInit, Input } from '@angular/core';

import { Task } from "../Models/task";
import { DataService } from "../servicios/data.service";

@Component({
  selector: 'app-lista-comentarios',
  templateUrl: './lista-comentarios.component.html',
  styleUrls: ['./lista-comentarios.component.css']
})
export class ListaComentariosComponent implements OnInit {
@Input ('task') task: Task;
  constructor(public dataService: DataService) { 

  }

  ngOnInit() {
  }

}
