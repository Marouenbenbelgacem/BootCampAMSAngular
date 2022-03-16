import { Component, OnInit } from '@angular/core';
import {UsersService} from "../services/users.service";
import {PostsService} from "../services/posts.service";
import {Post} from "../model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  etudiants:string[]=[]
  myPosts:Post[]=[]
  constructor(private service: UsersService, private ServicePost : PostsService) { }

  ngOnInit(): void {
    this.etudiants = this.service.getStudent();
    this.ServicePost.getPosts().subscribe(
      data => {
        this.myPosts = data;

      }
    )

  }

}
