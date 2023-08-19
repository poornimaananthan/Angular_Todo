import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent {
  todo = '';

  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.todoService.addTodo(this.todo);
    this.todo = '';
  }
}
