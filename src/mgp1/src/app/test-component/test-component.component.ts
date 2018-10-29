import { Component, OnInit } from '@angular/core';

import { Task } from "../Models/task";
import { DataService } from "../servicios/data.service";

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
  tasks: Task[];

  constructor(public dataService: DataService) { }

  ngOnInit() {

    //this.tasks = this.dataService.getTask();

  }

  addTask(task: Task){

    console.log(task);
    this.dataService.addTask(task)
      .subscribe(task => {
        this.tasks.push(task);
      });
      console.log(this.tasks);

  }

}
