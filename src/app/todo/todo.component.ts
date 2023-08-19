import { Component, Input } from '@angular/core';
import { Todo } from 'src/assets/user';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input()
  todoInput!: Todo;
  completed: boolean = false;
  todo!: Todo;

constructor(public todoService: TodoService){
  console.log(this.todoInput)
}
onChange() {
  console.log("changed");
  this.completed = !this.completed;
  this.completed ? alert('Todo succesfully completed'): '';
}

deleteTodo(item: any) {
  this.todo = item;
  this.todoService.deleteTodo(item);
  alert("Deleted Successfully");
}
toggleClass() {
  if (this.completed) {
    // return 'list-item-success';
    // return { 'list-group-item-success': this.completed, 'border-primary': this.completed };

  }
  else{
    
  }
}
}
