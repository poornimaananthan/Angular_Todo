import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { ColorBackGroudDirective } from './color-back-groud.directive';
import { ChildComponent } from './child/child.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TodoformComponent } from './todoform/todoform.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes=[
  {
    path:'login',component:LoginComponent
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {path: 'add', component: TodoformComponent},
  {path: 'list', component: TodoListComponent},
  {path: 'favorite', component: TodoListComponent},
  {
    path:'',component:LoginComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
     NavbarComponent,
    RegisterComponent,
    ColorBackGroudDirective,
    ChildComponent,
    TodoformComponent,
    TodoListComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
