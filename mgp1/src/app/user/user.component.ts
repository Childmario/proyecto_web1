import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Task } from "../Models/task";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
name: string;
email: string;
message: string;
@Output() Comentario_agregado = new EventEmitter<Task>();
@Input() vnombre_usuario;
  constructor() { }
  ngOnInit() {
  }
addTask(){
this.Comentario_agregado.emit({
  nombre: this.name,
  correo: this.email,
  mensaje: this.message
})
this.name = '';
this.email = '';
this.message = '';
}
}
