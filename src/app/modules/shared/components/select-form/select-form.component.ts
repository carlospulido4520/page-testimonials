import { Component, Input, OnInit } from '@angular/core';
import { ConfigurationSelect } from '../../models/configuracion_select';

@Component({
  selector: 'app-select-form',
  templateUrl: './select-form.component.html',
  styleUrls: ['./select-form.component.scss']
})
export class SelectFormComponent implements OnInit {

  @Input() configuration: ConfigurationSelect = {
    placeholder: '',
    options: []
  };

  constructor() { }

  ngOnInit(): void {
  }

}
