import { Injectable } from '@angular/core';
import { ListPostComponent } from './list-post/list-post.component';
import { article } from './model/article.model';
import { UpdatePostComponent } from './update-post/update-post.component';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
articles:article[]
  static listearticle: article[];


  constructor() { 
    this.articles=[]

  }
  listearticle():article[]{
    return this.articles
    
  }
  ajouterarticle(art:article){
  this.articles.push(art)
  }

  suprimerArticle(a:article){
    const index=this.articles.indexOf(a,0)
    if(index>-1)
    this.articles.splice(index,1)
  }

}
