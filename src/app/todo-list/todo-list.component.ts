import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { todoTask } from '../todo-list.model';
import { todoTaskService } from '../todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(public _todoTaskService:todoTaskService) { }

  todoList:any = []
  ngOnInit(): void {
    this._todoTaskService.gettodoList().subscribe((response:todoTask[])=>{
       this.todoList = response;
    });
  }

  

  createtodoTask(form:NgForm){
    var _todoTask : any  = {}; 
    _todoTask.TaskName =  form.controls["taskName"].value
    _todoTask.TaskDescription = form.controls["taskDescription"].value
    _todoTask.TaskAssignee = form.controls["taskAssignee"].value
    _todoTask.TaskPriority = form.controls["tasPriority"].value;
    _todoTask.id = this.todoList.length + 1 ;
    this._todoTaskService.createtodoTask(_todoTask);
     
  }

  removetodoTask(ID:any){
      this._todoTaskService.removetodoTask(ID);
  }

  




}
