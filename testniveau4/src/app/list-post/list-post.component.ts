import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { article } from '../model/article.model';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
 articles:article[] 
  constructor( private articleService:ArticleService) { 
    this.articles=articleService.listearticle()
  }
  suprimerArticle(a:article){
    console.log(a)
    this.articleService.suprimerArticle(a)
  }

  ngOnInit(): void {
  }

}
