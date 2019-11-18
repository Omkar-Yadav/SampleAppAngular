import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
 public id: number,
 public description: string,
 public done: boolean,
 public targetDate: Date
  ) {
  }
 }

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})



export class TodoComponent implements OnInit {

  constructor() { }
  todolist = [

    new Todo(1, 'learn to dance', false, new Date()),
    new Todo(2, 'learn to sing', false, new Date()),
    new Todo(3, 'learn to read', false, new Date()),
    new Todo(4, 'learn to angular', false, new Date())
];


  ngOnInit() {
  }

}
