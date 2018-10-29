import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import "rxjs/Rx";

import { Task } from "../Models/task";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  domain: string = "http://localhost:3000";
  tasks: Task[];
  tasks2: Task;
  constructor(private http: HttpClient) { 
    this.tasks = [];
  }

  getTask(){
    return this.http.get<Task[]>(`${this.domain}/api/tasks`)
    .map(res => res)
    //viejo
    //if(localStorage.getItem("tasks")===null){
    //this.tasks = [];
    //} 
    //else{
    //this.tasks = JSON.parse( localStorage.getItem('tasks') );
    //}

    //return this.tasks;
  }
  
  addTask(newTask){
    console.log('newtask');
    console.log(newTask);
 return this.http.post<Task>(`${this.domain}/api/tasks`, newTask)
 .map(res => res)
  }

  removeTask(id){
return this.http.delete<Task>(`${this.domain}/api/tasks/${id}`)
 .map(res => res)
  }

  updateTask(task){
    console.log("punto update");
    console.log(task);
    return this.http.put(`${this.domain}/api/tasks/${task._id}`, task)
 .map(res => res)
  } 

}

