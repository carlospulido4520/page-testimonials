import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewsletterModalComponent } from '../../modal/newsletter-modal/newsletter-modal.component';

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

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openModal() {
    this.dialog.open(NewsletterModalComponent, {
      backdropClass: 'dialog_backgound',
      width: '550px',
      panelClass: 'custom-dialog-container'
    });
  }

}
