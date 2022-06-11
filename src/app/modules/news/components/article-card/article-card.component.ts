import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/modules/shared/models/article';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {

  public articles: Article[] = [];

  constructor() { }

  ngOnInit(): void {
    this.articles = [
      {
        imageArticle: '../../../../../assets/img/articles/Rectangle 754.png',
        tittleArticle: ` Building Awareness: Creating a BodyTalk Matrix in Central Visayas and
        Mindanao, Philippines`,
        article: `Increased awareness, in all its forms, can have a truly remarkable effect
        in healing and growth. This is true for the...`,
        date: 'September 23, 2021',
        imageUser: '../../../../../assets/img/articles/Rectangle 753.png',
        nameUser: '[name_user]'
      },
      {
        imageArticle: '../../../../../assets/img/articles/Rectangle 754.png',
        tittleArticle: ` Building Awareness: Creating a BodyTalk Matrix in Central Visayas and
        Mindanao, Philippines`,
        article: `Increased awareness, in all its forms, can have a truly remarkable effect
        in healing and growth. This is true for the...`,
        date: 'September 23, 2021',
        imageUser: '../../../../../assets/img/articles/Rectangle 753.png',
        nameUser: '[name_user]'
      },
      {
        imageArticle: '../../../../../assets/img/articles/Rectangle 754.png',
        tittleArticle: ` Building Awareness: Creating a BodyTalk Matrix in Central Visayas and
        Mindanao, Philippines`,
        article: `Increased awareness, in all its forms, can have a truly remarkable effect
        in healing and growth. This is true for the...`,
        date: 'September 23, 2021',
        imageUser: '../../../../../assets/img/articles/Rectangle 753.png',
        nameUser: '[name_user]'
      },
      {
        imageArticle: '../../../../../assets/img/articles/Rectangle 754.png',
        tittleArticle: ` Building Awareness: Creating a BodyTalk Matrix in Central Visayas and
        Mindanao, Philippines`,
        article: `Increased awareness, in all its forms, can have a truly remarkable effect
        in healing and growth. This is true for the...`,
        date: 'September 23, 2021',
        imageUser: '../../../../../assets/img/articles/Rectangle 753.png',
        nameUser: '[name_user]'
      },
      {
        imageArticle: '../../../../../assets/img/articles/Rectangle 754.png',
        tittleArticle: ` Building Awareness: Creating a BodyTalk Matrix in Central Visayas and
        Mindanao, Philippines`,
        article: `Increased awareness, in all its forms, can have a truly remarkable effect
        in healing and growth. This is true for the...`,
        date: 'September 23, 2021',
        imageUser: '../../../../../assets/img/articles/Rectangle 753.png',
        nameUser: '[name_user]'
      }
    ]
  }

}
