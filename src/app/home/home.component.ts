import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../shared/theme.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  routes = [
    { title: 'Design', path: '/design' },
    { title: 'Dashboard', path: '/dashboard' },
    { title: 'Sketch', path: '/sketch' },
    { title: 'View Designer', path: '/vd' },
    { title: 'Canvas', path: '/canvas' },
  ];

  private themeService = inject(ThemeService);

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
