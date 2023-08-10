import { Component } from '@angular/core';

interface Task {
    name:string;
    strike: boolean;
}
@Component({
	selector: 'app-grocery',
	templateUrl: './app.grocery.html',
	styleUrls: [
        '../assets/css/bootstrap.min.css'
    ]
})

export class GroceryComponent {
  task: string = '';
  tasks = [];

  onClick(){
    if(this.task.trim()!==''){
  	this.tasks.push({name: this.task, strike: false});
  	this.task = '';
  }
}

  
}