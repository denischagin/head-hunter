import {Component, Input, TemplateRef} from '@angular/core';
import {NgIf, NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    NgIf
  ],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.scss'
})
export class AuthFormComponent {
  @Input() inputs: TemplateRef<unknown>
  @Input() formTitle: string
  @Input() buttonSubmit: TemplateRef<unknown>
  @Input() error: string | null
}
