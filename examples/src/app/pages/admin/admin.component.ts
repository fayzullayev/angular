import { Component, OnInit } from '@angular/core';
import { Comment } from '../../shared/interfaces/comment.interface';
import { CommentService } from '../../shared/services/comment.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent implements OnInit {
  comments: Comment[] = [];

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.commentService.getComments().subscribe((comments: Comment[]) => {
      this.comments = comments;
    });
  }
}
