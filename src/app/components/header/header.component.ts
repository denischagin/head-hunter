import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgForOf} from "@angular/common";
import {Paths} from "../../constants/paths";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  headerLinks = [
    {link: '/', title: "Главная"},
    {link: `/${Paths.LOGIN}`, title: "Войти"},
    {link: `/${Paths.REGISTER}`, title: "Зарегистрироваться"},
  ]
}
