import { Component, OnInit } from '@angular/core';
import { article } from '../model/article.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
newArticle= new article()

  constructor(private articleservice:ArticleService) { }
  addarticle(){
    this.articleservice.ajouterarticle(this.newArticle)
    console.log(this.newArticle)
  }


  ngOnInit(): void {
  }

}
