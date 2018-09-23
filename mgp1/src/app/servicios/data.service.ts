import { Injectable } from '@angular/core';

import { Task } from "../Models/task";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  tasks: Task[];
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

  updateTask(task: Task){

    
  }

}

