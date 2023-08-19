import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  constructor(public todoService: TodoService, public route: ActivatedRoute) { }

  viewList: boolean = true;

  ngOnInit(): void {
    this.route.url.subscribe(data => {
      // console.log(data[0].path);
      if (data[0].path == 'list') {
        this.viewList = true;
      }
      else {
        this.viewList = false;
        this.todoService.updateFav();
      }
    })
  }
}
