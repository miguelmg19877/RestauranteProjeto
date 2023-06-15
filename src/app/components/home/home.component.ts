import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('slideMesas', [
      transition(':enter', [
        //style transform and opacity
        style({transform: 'translateX(-100%)', opacity: 0.2}),
        animate('900ms ease-in', style({transform: 'translateX(0%)', opacity: 1}))
      ]),
      transition(':leave', [
        animate('900ms ease-in', style({transform: 'translateX(-100%)', opacity: 0}))
      ])
    ]),
    trigger('slideClientes', [
      transition(':enter', [
        //style transform and opacity
        style({transform: 'translateY(-100%)', opacity: 0.2}),
        animate('900ms ease-in', style({transform: 'translateY(0%)', opacity: 1}))
      ]),
      transition(':leave', [
        animate('900ms ease-in', style({transform: 'translateY(-100%)', opacity: 0}))
      ])
    ]),
    trigger('slideReservas', [
      transition(':enter', [
        //style transform and opacity
        style({transform: 'translateX(100%)', opacity: 0.2}),
        animate('900ms ease-in', style({transform: 'translateX(0%)', opacity: 1}))
      ]),
      transition(':leave', [
        animate('900ms ease-in', style({transform: 'translateX(100%)', opacity: 0}))
      ])
    ])
  ]
})
export class HomeComponent {

  constructor (private router: Router, private route: ActivatedRoute) { }

  clientes (): void {
    this.router.navigate(['clientes']);
  }

  reservas (): void {
    this.router.navigate(['reservas']);
  }

  mesas (): void {
    this.router.navigate(['mesas']);
  }
}
