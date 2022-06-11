import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';

// Pages
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';

// Components
import { ArticleCardComponent } from './components/article-card/article-card.component';

// Modals
import { ExampleModalComponent } from './modal/example-modal/example-modal.component';
import { NewsletterModalComponent } from './modal/newsletter-modal/newsletter-modal.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SearchNewsComponent } from './components/search-news/search-news.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

// Menus


@NgModule({
  declarations: [
    NewsPageComponent,
    ArticlePageComponent,
    ArticleCardComponent,
    ExampleModalComponent,
    NewsletterModalComponent,
    SearchNewsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    NewsPageComponent
  ]
})
export class NewsModule { }
