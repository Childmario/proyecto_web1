import { Injectable } from '@angular/core';

import { Task } from "../Models/task";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  tasks: Task[];
  tasks2: Task;
  constructor() { 
    this.tasks = [];
  }

  getTask(): Task[]{
    if(localStorage.getItem("tasks")===null){
      this.tasks = [];
    } 
    else{
      this.tasks = JSON.parse( localStorage.getItem('tasks') );
    }

    return this.tasks;
  }
  
  addTask(task: Task): void{
    this.tasks.unshift(task);
    let tasks;
    if(localStorage.getItem("tasks")===null){
      tasks = [];
      tasks.unshift(task);
      localStorage.setItem('tasks', JSON.stringify( tasks ))
    } 
    else {
      tasks = JSON.parse( localStorage.getItem('tasks') );
      tasks.unshift(task);
      localStorage.setItem('tasks', JSON.stringify( tasks ))
    }
  }

  removeTask(task: Task){

    for (let index = 0; index < this.tasks.length; index++) {
      if (task == this.tasks[index]) {
        this.tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify( this.tasks ));
      }
      
    }

  }

  editTask(task: Task):Task{

    for (let index = 0; index < this.tasks.length; index++) {
      if (task == this.tasks[index]) {
          this.tasks2 = this.tasks[index];
          //console.log(this.tasks2);
          this.tasks2.id = index.toString();
      }
    }
    return this.tasks2;
  }

  updateTask(task: Task):void{
    let id: number = 0;
    id = Number(task.id);
    let tasks
    tasks = JSON.parse( localStorage.getItem('tasks') );
    for (let index = 0; index < tasks.length; index++) {
      if (id == index) {
        console.log("Funciona mal");
        console.log(task);
        tasks.splice(index, 1, task);
        console.log(tasks);
        localStorage.setItem('tasks', JSON.stringify( tasks ));
      }
      
    }
    
  }

}

