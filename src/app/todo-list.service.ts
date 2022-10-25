
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { todoTask } from "./todo-list.model";


@Injectable({providedIn:'root'})
export class todoTaskService{

    public constructor(private http : HttpClient){

    }

    gettodoListAPI = "http://localhost:8000/Tasks";
   // createtodoTaskAPI = "http://localhost:8000/Tasks";
   // removetodoTaskAPI = ""

gettodoList() : Observable<todoTask[]>{
      return this.http.get<todoTask[]>(this.gettodoListAPI);
    }

createtodoTask(task:todoTask) : any {
     return this.http.post<todoTask>(this.gettodoListAPI,task)
}

removetodoTask(id:any) : any{
    return this.http.delete<todoTask>(this.gettodoListAPI,id);
}

}