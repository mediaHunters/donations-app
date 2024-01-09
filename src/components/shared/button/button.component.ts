import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() type: 'golden-rose' | 'blue-icon' | 'golden-icon' | 'light-blue' | '' = '';

  get buttonClass() {
    return `base-button base-button--${this.type}`;
  }
}
