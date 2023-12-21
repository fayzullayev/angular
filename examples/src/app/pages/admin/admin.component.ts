import { Component, OnInit } from '@angular/core';
import { Comment } from '../../shared/interfaces/comment.interface';
import { CommentService } from '../../shared/services/comment.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../../shared/interfaces/user.interface';

@Component({
  selector: 'app-admin',
  standalone: true,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent implements OnInit {
  comments: Comment[] = [];

  constructor(
    private commentService: CommentService,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.commentService.getComments().subscribe((comments: Comment[]) => {
      this.comments = comments;
      console.log(1);
    });
    //
    // this.http
    //   .get<User[]>('https://jsonplaceholder.typicode.com/users')
    //   .subscribe((users: User[]) => {
    //     console.log('users', users);
    //   });
  }
}
