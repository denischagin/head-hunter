import {Component, Input, TemplateRef} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgClass, NgForOf, NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgClass,
    NgForOf,
    NgTemplateOutlet
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  @Input() panelRef: TemplateRef<unknown>;

  routes = [
    {title: 'Вакансии', link: '/vacancies'},
    {title: 'Резюме', link: '/resume'},
    {title: 'Компании', link: '/companies'},
  ]
}
