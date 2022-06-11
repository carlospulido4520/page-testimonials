import { Component, OnInit } from '@angular/core';
import { Testimonial } from 'src/app/modules/shared/models/testimonial';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss']
})
export class TestimonialCardComponent implements OnInit {

  public testimonios: Testimonial[] = [];

  constructor() { }

  ngOnInit(): void {
    this.testimonios = [
      {
        nombre: 'German',
        role: 'Diseñador',
        avatar: '../../../../../assets/img/avatar-juan.png',
        logo: '../../../../../assets/img/testimonials/Bodytalk.png',
        testimonio: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quam
        magnam earum quibusdam impedit velit explicabo suscipit accusamus
        beatae, soluta quo alias asperiores quia consequuntur odio voluptatum,
        dolores ullam fugiat.`,
        fecha: '15/12/2021 · 8:15 AM',
        description: 'Fear/ Phobia- Afraid to Drive'
      },
      {
        nombre: 'Carlos',
        role: 'Administrador',
        avatar: '../../../../../assets/img/avatar.png',
        logo: '../../../../../assets/img/testimonials/Bodytalk.png',
        testimonio: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quam
        magnam earum quibusdam impedit velit explicabo suscipit accusamus
        beatae, soluta quo alias asperiores quia consequuntur odio voluptatum,
        dolores ullam fugiat.`,
        fecha: '15/12/2021 · 8:15 AM',
        description: 'Fear/ Phobia- Afraid to Drive'
      },
      {
        nombre: 'Andres',
        role: 'Developer',
        avatar: '../../../../../assets/img/avatar-juan.png',
        logo: '../../../../../assets/img/testimonials/Bodytalk.png',
        testimonio: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quam
        magnam earum quibusdam impedit velit explicabo suscipit accusamus
        beatae, soluta quo alias asperiores quia consequuntur odio voluptatum,
        dolores ullam fugiat.`,
        fecha: '15/12/2021 · 8:15 AM',
        description: 'Fear/ Phobia- Afraid to Drive'
      }
    ]
  }

}
