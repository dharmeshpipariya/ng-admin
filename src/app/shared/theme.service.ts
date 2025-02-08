import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkThemeSubject = new BehaviorSubject<boolean>(
    this.getInitialTheme()
  );
  isDarkTheme$ = this.isDarkThemeSubject.asObservable();

  constructor() {
    this.watchSystemThemeChanges();
  }

  private getInitialTheme(): boolean {
    if (typeof window !== 'undefined') {
      return (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      );
    }
    return false;
  }

  private watchSystemThemeChanges() {
    if (typeof window !== 'undefined') {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', (e) => {
          this.isDarkThemeSubject.next(e.matches);
        });
    }
  }

  toggleTheme() {
    this.isDarkThemeSubject.next(!this.isDarkThemeSubject.value);
    // toggleTheme(): void {
    //   this.darkMode = !this.darkMode;
    //   const darkThemeClass = 'dark-theme';

    //   const overlayContainerElement =
    //     this._overlayContainer.getContainerElement();

    //   if (this.darkMode) {
    //     overlayContainerElement.classList.add(darkThemeClass);
    //     document.body.classList.add(darkThemeClass);
    //   } else {
    //     overlayContainerElement.classList.remove(darkThemeClass);
    //     document.body.classList.remove(darkThemeClass);
    //   }
    // }
  }

  setDarkTheme(isDark: boolean) {
    this.isDarkThemeSubject.next(isDark);
  }
}
