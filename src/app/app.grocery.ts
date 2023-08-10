import { Component } from '@angular/core';

interface Task {
  name: string;
}

@Component({
	selector: 'app-grocery',
	templateUrl: './app.grocery.html',
	styleUrls: [
        '../assets/css/bootstrap.min.css',
        '../styles.css'
    ]
})

export class GroceryComponent {
  task: string = '';
  tasks: Task[] = [];

  onClick(){
    if(this.task.trim()!==''){
  	this.tasks.push({name: this.task});
  	this.task = '';
  }
}

  
}