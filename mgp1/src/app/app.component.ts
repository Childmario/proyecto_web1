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

  constructor(public dataService: DataService){}

  ngOnInit() {
    this.tasks = this.dataService.getTask();
  }

}

