import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {

  public configurationLanguage = {
    placeholder: 'Language',
    options: ['Español', 'English', 'All languages']
  }

  public configurationCourse = {
    placeholder: 'Course',
    options: ['[Course_1]', '[Course_2]', '[Course_3]']
  }

  constructor() { }

  ngOnInit(): void {
  }

}
