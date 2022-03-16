import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private  http: HttpClient) {

}

getPosts():Observable<Post[]>{

    return this.http.get<Post[]>("http://jsonplaceholder.typicode.com/posts");
}
}
