import { Component, ElementRef, inject, Renderer2 } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeService } from '../shared/theme.service';
import { FullscreenService } from '../shared/fullscreen.service';

@Component({
  selector: 'app-dashboard',
  imports: [SharedModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  private themeService = inject(ThemeService);
  private fullscreenService = inject(FullscreenService);
  isDarkTheme$ = this.themeService.isDarkTheme$;

  routes = [
    { name: 'Dashboard', route: '/' },
    { name: 'Typography', route: '/typography' },
    { name: 'Tables', route: '/tables' },
    { name: 'Forms', route: '/forms' },
    { name: 'Components', route: '/components' },
    { name: 'Sample Pages', route: '/sample-pages' },
  ];

  constructor(
    private _element: ElementRef,
    private _overlayContainer: OverlayContainer
  ) {}

  toggleFullscreen() {
    this.fullscreenService.toggleFullscreen();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
