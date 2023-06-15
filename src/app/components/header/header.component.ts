import { Component } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('texto', [
      transition(':enter', [
        //style transform and opacity
        style({opacity: 0.2}),
        animate('900ms ease-in', style({opacity: 1}))
      ]),
      transition(':leave', [
        animate('900ms ease-in', style({ opacity: 0.2}))
      ])
    ])
  ]
})
export class HeaderComponent {

}
