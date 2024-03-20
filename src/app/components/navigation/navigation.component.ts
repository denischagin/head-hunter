import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgClass,
    NgForOf
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  routes = [
    {title: 'Вакансии', link: '/vacancies'},
    {title: 'Резюме', link: '/resume'},
    {title: 'Компании', link: '/companies'},
  ]
}
